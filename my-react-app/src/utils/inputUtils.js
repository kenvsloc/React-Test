// src/utils/inputUtils.js

/**
 * Kiểm tra xem giá trị có phải là email hợp lệ không
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Kiểm tra xem mật khẩu có đủ mạnh không (ít nhất 6 ký tự)
 */
export function isValidPassword(password) {
  return password.length >= 6;
}

/**
 * Chuyển đổi giá trị input thành số nếu có thể
 */
export function parseNumber(value) {

  if (value === null || value === '' || value === undefined) {
    return null;
  }

  const num = Number(value);
  return isNaN(num) ? null : num;
}

/**
 * Format ngày tháng theo định dạng Việt Nam (dd/mm/yyyy)
 */
export function formatDate(vietnamDate) {
  if (!vietnamDate) return '';
  const date = new Date(vietnamDate);
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
}