import React from "react";

const Input = React.forwardRef(({ 
  type = "text", 
  className = "", 
  disabled = false,
  ...props 
}, ref) => {
  const classes = ["input", className].filter(Boolean).join(" ");

  return (
    <input
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;