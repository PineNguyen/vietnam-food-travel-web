# 🇻🇳 Vietnam Food & Travel Web

Website giới thiệu địa danh du lịch và văn hóa ẩm thực các vùng miền Việt Nam (Bắc - Trung - Nam).

Dự án đã được nâng cấp hoàn thành **Giai đoạn 2 (Hiện đại hóa với Vite & Component-Based)**.

---

## ⚡ Tính Năng & Kiến Trúc Nâng Cấp (Phase 2 Features)

1. **Build Tooling với Vite**:
   - Quản lý dependencies và nén mã nguồn tự động qua `package.json`.
   - Hỗ trợ môi trường phát triển siêu tốc với **Vite HMR** (`npm run dev`).
   - Đóng gói chuẩn sản xuất Multi-Page App (`npm run build`).

2. **Dữ liệu Động Tách Biệt (Data Layer - JSON)**:
   - [`src/data/foods.json`](file:///Users/nguyenhuuminhthong/Documents/vietnam-food-travel-web/src/data/foods.json): Quản lý tập trung 25+ món ăn 3 miền.
   - [`src/data/destinations.json`](file:///Users/nguyenhuuminhthong/Documents/vietnam-food-travel-web/src/data/destinations.json): Quản lý tập trung 27+ địa điểm du lịch.

3. **Lập trình Component-Based (ES Modules)**:
   - [`src/components/FoodCard.js`](file:///Users/nguyenhuuminhthong/Documents/vietnam-food-travel-web/src/components/FoodCard.js): Component tự động render thẻ món ăn từ JSON.
   - [`src/components/PlaceCard.js`](file:///Users/nguyenhuuminhthong/Documents/vietnam-food-travel-web/src/components/PlaceCard.js): Component tự động render thẻ địa điểm từ JSON.

4. **Code Quality**:
   - Tích hợp **Prettier** (`.prettierrc`) giúp tự động chuẩn hóa quy cách định dạng code.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
vietnam-food-travel-web/
├── src/
│   ├── data/
│   │   ├── foods.json           # Dữ liệu 25 món ăn 3 miền
│   │   └── destinations.json    # Dữ liệu 27 địa điểm du lịch
│   └── components/
│       ├── FoodCard.js          # Component render thẻ món ăn
│       └── PlaceCard.js         # Component render thẻ địa điểm
├── assets/
│   ├── css/                     # Toàn bộ file styles & variables
│   ├── js/                      # Main JS, Food JS, Travel JS, Pagination JS
│   ├── images/                  # Quản lý hình ảnh
│   └── videos/                  # Video nền
├── pages/                       # Các trang nội dung HTML thứ cấp
├── index.html                   # Trang chủ chính
├── package.json                 # Cấu hình npm & Vite scripts
├── vite.config.js               # Cấu hình Vite MPA Build
├── .prettierrc                  # Cấu hình Prettier formatter
└── README.md
```

---

## 🚀 Hướng Dẫn Khởi Chạy

### Môi trường phát triển (Dev Mode)
Chạy câu lệnh sau trong Terminal:
```bash
npm run dev
```
Trình duyệt sẽ tự động mở trang web tại `http://localhost:3000`.

### Đóng gói sản xuất (Production Build)
```bash
npm run build
```
Vite sẽ tự động kiểm tra, tối ưu và đóng gói toàn bộ trang web vào thư mục `dist/`.
