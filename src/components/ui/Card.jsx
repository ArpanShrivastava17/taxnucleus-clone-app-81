import React from "react";

const Card = React.forwardRef(({ children, className = "", ...props }, ref) => {
  const classes = ["card", className].filter(Boolean).join(" ");
  
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

const CardHeader = React.forwardRef(({ children, className = "", ...props }, ref) => {
  const classes = ["card-header", className].filter(Boolean).join(" ");
  
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

const CardTitle = React.forwardRef(({ children, className = "", ...props }, ref) => {
  const classes = ["card-title", className].filter(Boolean).join(" ");
  
  return (
    <h3 ref={ref} className={classes} {...props}>
      {children}
    </h3>
  );
});

const CardDescription = React.forwardRef(({ children, className = "", ...props }, ref) => {
  const classes = ["card-description", className].filter(Boolean).join(" ");
  
  return (
    <p ref={ref} className={classes} {...props}>
      {children}
    </p>
  );
});

const CardContent = React.forwardRef(({ children, className = "", ...props }, ref) => {
  const classes = ["card-content", className].filter(Boolean).join(" ");
  
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardDescription, CardContent };