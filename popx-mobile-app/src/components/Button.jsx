import React from 'react';

const Button = ({ text, onClick, variant = 'primary', type = 'button', disabled = false }) => {
  const buttonClasses = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    secondary: 'bg-purple-200 text-gray-700 hover:bg-purple-300',
    disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed'
  };

  const classes = disabled 
    ? buttonClasses.disabled 
    : buttonClasses[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 rounded-md font-medium text-center transition-colors ${classes}`}
    >
      {text}
    </button>
  );
};

export default Button;