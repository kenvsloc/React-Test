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
export type ProductType = 'coffee' | 'tea' | 'smoothie';

export interface ProductProps {
  id: string;               // ID duy nhất
  title: string;
  description: string;
  price: number;
  buy: number;
  category?: string;
  image: string; // Optional image property
  type: ProductType;
}
// Define the shape of your state

export interface CartItem extends ProductProps {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;

}
