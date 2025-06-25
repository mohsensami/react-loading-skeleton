import styles from "./LoadingSkeleton.module.css";
import React from "react";

interface LoadingSkeletonProps {
  width?: number | string;
  height?: number | string;
  variant?: "text" | "circle" | "rect";
}

const getBorderRadius = (variant: string | undefined) => {
  switch (variant) {
    case "circle":
      return "50%";
    case "rect":
      return "4px";
    case "text":
    default:
      return "4px";
  }
};

const getDefaultSize = (variant: string | undefined) => {
  switch (variant) {
    case "circle":
      return { width: 40, height: 40 };
    case "rect":
      return { width: 300, height: 100 };
    case "text":
    default:
      return { width: 200, height: 20 };
  }
};

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  width,
  height,
  variant = "text",
}) => {
  const defaultSize = getDefaultSize(variant);
  const style = {
    width: width ?? defaultSize.width,
    height: height ?? defaultSize.height,
    borderRadius: getBorderRadius(variant),
  } as React.CSSProperties;

  return <div className={styles.skeleton} style={style} />;
};

export { LoadingSkeleton };
