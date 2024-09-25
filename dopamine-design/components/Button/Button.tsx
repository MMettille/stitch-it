import React from 'react';

interface ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
