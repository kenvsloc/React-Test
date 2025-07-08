// src/components/Button.jsx
import PropTypes from 'prop-types';
import './css/Button.css';

function Button({ variant = 'primary', children, onClick }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;