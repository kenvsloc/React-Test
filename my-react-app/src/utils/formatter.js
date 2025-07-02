export function formatPrice(price) {
     if (price === null || price === '' || price === undefined) {
    return null;
  }


  const validPrice = Number(price);
  if (isNaN(validPrice)) {
    return 'Invalid price';
  }
  return validPrice.toLocaleString('vi-VN') + ' VND';
}