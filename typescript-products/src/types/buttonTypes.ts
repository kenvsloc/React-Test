// src/components/types.ts
export type Variant = 'primary' | 'secondary' | 'danger' | 'success';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: ButtonType;
  className?: string;
  [key: string]: any; // Để hỗ trợ {...rest}
}