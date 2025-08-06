import React from "react";

const Button = React.forwardRef(({ 
  children, 
  variant = "primary", 
  size = "md", 
  disabled = false, 
  onClick,
  type = "button",
  className = "",
  ...props 
}, ref) => {
  const baseClasses = "button";
  const variantClasses = `button-${variant}`;
  const sizeClasses = `button-${size}`;
  
  const classes = [baseClasses, variantClasses, sizeClasses, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;