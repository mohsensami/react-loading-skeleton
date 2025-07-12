import React from "react";
import "./LoadingSkeleton.css";

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
      <div className="skeleton-item"></div>
    </div>
  );
};

export default LoadingSkeleton;
