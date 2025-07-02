// src/components/Button.jsx
import PropTypes from 'prop-types';
import './Button.css'; // Nếu bạn muốn styling chung

const Button = ({
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button;