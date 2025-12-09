import { ImgHTMLAttributes, useState } from "react";

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export const SafeImage = ({ src, fallback, onError, ...rest }: SafeImageProps) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  return (
    <img
      {...rest}
      src={currentSrc}
      onError={(e) => {
        if (fallback && currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
        onError?.(e);
      }}
    />
  );
};

