export interface UserOrderType {
    id: string;
    name: string;               // ID duy nhất
    username: string;       // Trạng thái hoạt động
    image?: string;         // Thời gian tạo
    email: string;
    location: string;         // Địa chỉ (tùy chọn)
    status: string;
    balance: string;       // Thời gian cập nhật lần cuối
}

