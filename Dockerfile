# ==========================================
# Stage 1: Build source code bằng Node.js
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm ci

# Sao chép toàn bộ source code
COPY . .

# Build dự án ra thư mục dist
RUN npm run build

# ==========================================
# Stage 2: Serve tĩnh bằng Nginx Alpine
# ==========================================
FROM nginx:1.27-alpine AS runner

# Xóa cấu hình mặc định của Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

# Sao chép file cấu hình tùy chỉnh
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Sao chép kết quả build từ Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Mở port 80
EXPOSE 80

# Health check định kỳ
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
