import { ImgHTMLAttributes, useState, useEffect } from "react";

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export const SafeImage = ({ src, fallback, onError, ...rest }: SafeImageProps) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Синхронизируем состояние при изменении src
  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
  }, [src]);

  return (
    <img
      {...rest}
      src={currentSrc}
      onError={(e) => {
        if (fallback && !hasError) {
          setCurrentSrc(fallback);
          setHasError(true);
        }
        onError?.(e);
      }}
    />
  );
};

