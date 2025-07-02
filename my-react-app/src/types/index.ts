// src/types/index.ts

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