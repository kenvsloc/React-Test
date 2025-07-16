// productConfig.ts

/**
 * Cấu hình ánh xạ giữa loại sản phẩm (type) và thư mục chứa ảnh tương ứng
 */
export const PRODUCT_TYPE_TO_FOLDER = {
  female: 'fashionFemale',
  male: 'fashionMale',
  kids: 'fashionKid',
  accessory: 'fashionAccessory',
  default: 'fashionFemale',
} as const;

/**
 * Kiểu dữ liệu cho loại sản phẩm
 */
export type ProductType = keyof typeof PRODUCT_TYPE_TO_FOLDER;

/**
 * Danh sách các thư mục có thể dùng để fallback khi ảnh chính không load được
 *
 * Mỗi loại sản phẩm có thể thử tải ảnh từ các thư mục khác theo thứ tự ưu tiên
 */
export const FALLBACK_FOLDERS: Record<ProductType, string[]> = {
  female: ['fashionMale', 'fashionKid', 'fashionAccessory'],
  male: ['fashionFemale', 'fashionKid', 'fashionAccessory'],
  kids: ['fashionFemale', 'fashionMale', 'fashionAccessory'],
  accessory: ['fashionFemale', 'fashionMale', 'fashionKid'],
  default: ['fashionFemale', 'fashionMale', 'fashionKid', 'fashionAccessory'],
};

/**
 * Đường dẫn ảnh mặc định nếu tất cả đều lỗi
 */
export const DEFAULT_IMAGE_URL = '/images/default-product.png';

/**
 * Hàm lấy đường dẫn ảnh dựa trên loại sản phẩm và tên file
 */
export const getImagePath = (type: ProductType, imageFileName: string): string => {
  const folder = PRODUCT_TYPE_TO_FOLDER[type] || PRODUCT_TYPE_TO_FOLDER.default;
  return `/images/${folder}/${imageFileName}`;
};

/**
 * Hàm lấy đường dẫn ảnh dự phòng đầu tiên tồn tại
 */
export const getFallbackImagePath = (
  type: ProductType,
  imageFileName: string
): string[] => {
  const fallbackFolders = FALLBACK_FOLDERS[type] || FALLBACK_FOLDERS.default;
  return fallbackFolders.map(folder => `/images/${folder}/${imageFileName}`);
};