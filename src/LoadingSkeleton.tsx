import React from "react";
import "./LoadingSkeleton.css";

interface LoadingSkeletonProps {
  color?: string;
}

function LoadingSkeleton({ color = "#e0e0e0" }: LoadingSkeletonProps) {
  return (
    <div className="skeleton-container">
      <div className="skeleton-item" style={{ backgroundColor: color }}></div>
      <div className="skeleton-item" style={{ backgroundColor: color }}></div>
      <div className="skeleton-item" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default LoadingSkeleton;
