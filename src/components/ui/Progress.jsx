import React from "react";

const Progress = React.forwardRef(({ value = 0, className = "", ...props }, ref) => {
  const classes = ["progress", className].filter(Boolean).join(" ");
  
  return (
    <div ref={ref} className={classes} {...props}>
      <div 
        className="progress-indicator" 
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  );
});

Progress.displayName = "Progress";

export default Progress;