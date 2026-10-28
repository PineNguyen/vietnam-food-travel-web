# HƯỚNG DẪN TRIỂN KHAI CI/CD LÊN CLOUD (AWS ECR & EC2)

Tài liệu này hướng dẫn chi tiết từng bước thiết lập hạ tầng AWS và GitHub Actions để triển khai tự động dự án **`vietnam-food-travel-web`** theo mô hình:

```
Developer ➔ GitHub ➔ GitHub Actions ➔ Test ➔ Build Docker Image ➔ Amazon ECR ➔ Amazon EC2 ➔ Docker Container
```

---

## 1. Kiểm tra chạy thử tại máy Local (Tùy chọn)

Trước khi đẩy lên AWS, bạn có thể kiểm tra Docker Image tại máy tính cá nhân:

```bash
# Cách 1: Sử dụng docker-compose (Khuyên dùng)
docker compose up -d --build

# Cách 2: Sử dụng Docker CLI truyền thống
docker build -t vietnam-food-travel .
docker run -d -p 8088:80 --name vietnam-food-travel-local vietnam-food-travel
```
Sau đó truy cập: `http://localhost:8088` hoặc `http://localhost:8088/health`.

---

## 2. Chuẩn bị tài nguyên trên AWS

### Bước 2.1: Tạo kho lưu trữ Amazon ECR (Elastic Container Registry)
1. Đăng nhập vào [AWS Management Console](https://console.aws.amazon.com/).
2. Tìm kiếm dịch vụ **ECR (Elastic Container Registry)**.
3. Chọn **Create repository**:
   - Loại hiển thị: **Private**.
   - Repository name: `vietnam-food-travel-web`.
   - Bấm **Create repository**.
4. Lưu lại URI của repo (dạng: `<ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/vietnam-food-travel-web`).

---

### Bước 2.2: Tạo máy chủ Amazon EC2
1. Mở dịch vụ **EC2** ➔ Bấm **Launch Instance**:
   - **Name**: `vietnam-food-travel-server`
   - **OS Images**: Chọn **Ubuntu Server 24.04 LTS** (hoặc Amazon Linux 2023).
   - **Instance type**: `t2.micro` hoặc `t3.micro` (đủ điều kiện Free Tier).
   - **Key pair**: Tạo mới hoặc chọn key có sẵn (ví dụ: `my-key.pem`). Tải file `.pem` về máy và cất giữ cẩn thận.
   - **Network settings / Security Group**: Mở các cổng sau:
     - `SSH` (Port 22): Cho phép IP của bạn hoặc `Anywhere (0.0.0.0/0)`.
     - `HTTP` (Port 80): Cho phép `Anywhere (0.0.0.0/0)` để người dùng truy cập web.
     - `HTTPS` (Port 443): Cho phép `Anywhere (0.0.0.0/0)` (nếu sau này gắn SSL).
2. Bấm **Launch Instance**.

---

### Bước 2.3: Cài đặt Docker & AWS CLI trên máy chủ EC2
SSH vào máy chủ EC2:
```bash
ssh -i /path/to/my-key.pem ubuntu@<EC2_PUBLIC_IP>
```

Chạy chuỗi lệnh sau để cài đặt Docker và AWS CLI:
```bash
# 1. Cập nhật hệ thống và cài đặt Docker + AWS CLI
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io awscli curl

# 2. Khởi động Docker service
sudo systemctl enable --now docker

# 3. Cho phép user hiện tại dùng docker không cần sudo
sudo usermod -aG docker $USER
newgrp docker

# 4. Kiểm tra Docker hoạt động
docker --version
```

---

### Bước 2.4: Tạo quyền IAM (Credentials cho GitHub Actions)
1. Mở dịch vụ **IAM (Identity and Access Management)** ➔ **Users** ➔ **Create user**.
2. Đặt tên user: `github-actions-deployer`.
3. Gắn quyền (Permissions):
   - Chọn **Attach policies directly**:
     - Thêm policy `AmazonEC2ContainerRegistryPowerUser` (cho phép Push/Pull Image từ ECR).
4. Sau khi tạo user, vào tab **Security credentials** ➔ Tạo **Access key** (chọn mục đích *Application running outside AWS*).
5. Lưu lại 2 thông tin quan trọng:
   - `Access key ID`
   - `Secret access key`

---

## 3. Cấu hình GitHub Secrets

Trên repository GitHub của bạn:
1. Vào tab **Settings** ➔ **Secrets and variables** ➔ **Actions**.
2. Bấm **New repository secret** và thêm đầy đủ các secret sau:

| Tên Secret | Ý nghĩa / Giá trị mẫu |
| :--- | :--- |
| `AWS_ACCESS_KEY_ID` | Access Key của IAM User vừa tạo ở bước 2.4 |
| `AWS_SECRET_ACCESS_KEY` | Secret Key của IAM User vừa tạo ở bước 2.4 |
| `AWS_REGION` | Khu vực AWS bạn đang dùng (ví dụ: `ap-southeast-1` hoặc `us-east-1`) |
| `ECR_REPOSITORY` | Tên kho ECR (ví dụ: `vietnam-food-travel-web`) |
| `EC2_HOST` | Địa chỉ **Public IPv4** hoặc Public DNS của máy chủ EC2 |
| `EC2_USER` | `ubuntu` (nếu dùng Ubuntu) hoặc `ec2-user` (nếu dùng Amazon Linux) |
| `EC2_SSH_KEY` | Toàn bộ nội dung file `.pem` (Bao gồm cả dòng `-----BEGIN RSA PRIVATE KEY-----` và `-----END RSA PRIVATE KEY-----`) |

---

## 4. Kích hoạt và kiểm tra CI/CD

1. Commit và push code lên nhánh `main`:
   ```bash
   git add .
   git commit -m "feat: setup docker and aws github actions pipeline"
   git push origin main
   ```
2. Mở tab **Actions** trên GitHub để theo dõi quy trình:
   - **Job 1 (Test & Build Validation):** Cài đặt `npm ci` và chạy `npm run build` để đảm bảo code không lỗi.
   - **Job 2 (Build & Push Image to ECR):** Build Docker image và đẩy lên Amazon ECR với tag commit hash và `latest`.
   - **Job 3 (Deploy to Amazon EC2):** Tự động SSH vào EC2, pull image mới nhất và restart container với port 80.
3. Khi pipeline báo tích xanh thành công (✅), mở trình duyệt và truy cập:
   ```
   http://<EC2_PUBLIC_IP>
   ```

---

## 5. Lưu ý về Amazon RDS và Mở rộng Backend

Sơ đồ ban đầu của bạn có mắt xích `Docker Container -> Application -> Amazon RDS`:
- Hiện tại dự án này là **Frontend thuần túy**, phục vụ giao diện người dùng. Frontend chạy trên trình duyệt client nên **không kết nối trực tiếp với Database (RDS)**.
- Khi bạn mở rộng dự án thêm tính năng (như đăng nhập, bình luận, đặt tour):
  1. Tạo thêm thư mục `/server` chứa Backend API (Node.js/Express, Python/FastAPI, Spring Boot...).
  2. Tạo instance **Amazon RDS** (MySQL hoặc PostgreSQL) trong cùng VPC với EC2.
  3. Cấu hình **Security Group của RDS**: Chỉ cho phép mở port (3306/5432) từ Security Group của EC2.
  4. Container Backend trên EC2 sẽ nhận biến môi trường `DATABASE_URL` để kết nối vào RDS, còn container Frontend Nginx sẽ chuyển tiếp các request `/api/*` tới Backend.
