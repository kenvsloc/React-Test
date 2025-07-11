import './css/button.css';
import type { ButtonProps } from '../types/buttonTypes';



const Buttons: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  isLoading = false,
  disabled = false,
  type = 'button',
  className = '',
  ...rest
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const loadingClass = isLoading ? 'btn-loading' : '';
  const disabledClass = disabled ? 'btn-disabled' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClass} ${variantClass} ${loadingClass} ${disabledClass} ${className}`}
      {...rest}
    >
      {isLoading ? (
        <>
          <span className="spinner"></span>
          Đang tải...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Buttons;