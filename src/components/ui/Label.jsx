import React from "react";

const Label = React.forwardRef(({ children, htmlFor, className = "", ...props }, ref) => {
  const classes = ["label", className].filter(Boolean).join(" ");
  
  return (
    <label ref={ref} htmlFor={htmlFor} className={classes} {...props}>
      {children}
    </label>
  );
});

Label.displayName = "Label";

export default Label;