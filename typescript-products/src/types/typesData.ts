export interface BaseProps {
  id: string;               // ID duy nhất
  isActive?: boolean;       // Trạng thái hoạt động
  createdAt?: Date;         // Thời gian tạo
  updatedAt?: Date;         // Thời gian cập nhật lần cuối
}

export interface CustomerTs extends BaseProps {
  contact: number;          // Số liên lạc
  email: string;            // Email
  address?: string;         // Địa chỉ (tùy chọn)
  name?: string;            // Tên khách hàng (nếu cần thiết)
}

export interface ProductProps {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  stock: number;
  image?: string; // Optional image property
}

export interface BaseEntity {
  id: string;              // ID duy nhất cho mỗi bản ghi
  createdAt?: Date;        // Thời gian tạo
  updatedAt?: Date;        // Thời gian cập nhật lần cuối
  isActive?: boolean;      // Trạng thái hoạt động
}