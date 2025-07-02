// src/types/index.ts
// src/components/index.ts
export { default as Card } from './Card'
export { default as Student } from './Student'
export { default as UserGreeting } from './UserGreeting'
export { default as List } from '../pages/List'
export { default as Button } from './BE'
export { default as ProfilePicture } from './ProfilePicture'
export { default as ImageUploader } from './ImageUploader'


// Ví dụ: kiểu người dùng
export type User = {
  id?: string;
  name: string;
  email: string;
  age?: number;
  createdAt: Date;
};

// Ví dụ: kiểu học sinh
export interface Student {
  id: string;
  name: string;
  age: number;
  isEnrolled: boolean;
}

// Ví dụ: kiểu lịch sử click
export type ClickLog = {
  id?: string;
  name: string;
  count: number;
  timestamp: Date;
};

export type ImageUpload = {
  id: string;
  url: string;
  uploadedAt: Date;
  userId?: string; // Tuỳ chọn, nếu bạn có xác thực người dùng
};