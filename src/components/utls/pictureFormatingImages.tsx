import { ImgHTMLAttributes } from "react";
import { IMAGE_URL } from "../../constants/baseUrl";

const PictureImage = ({
  src,
  alt,
  width = 400,
  height = 400,
  className = "",
  ...rest
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: HTMLHtmlElement["className"];
} & ImgHTMLAttributes<HTMLImageElement>) => {
  if (!src) {
    return null; // Prevents errors if src is missing
  }

  // Full image path
  const imageUrl = `${IMAGE_URL}${src}`;

  return (
    <picture>
      {/* Modern image formats */}
      <source srcSet={`${imageUrl}.avif`} type="image/avif" />
      <source srcSet={`${imageUrl}.webp`} type="image/webp" />

      {/* Fallback image */}
      <img
        src={imageUrl}
        alt={alt || "Movie Image"}
        loading="lazy"
        width={width}
        height={height}
        className={`object-cover transition-transform duration-500 transform hover:scale-110 ${className}`}
        srcSet={`
        ${IMAGE_URL}w185${imageUrl} 185w,
        ${IMAGE_URL}w342${imageUrl} 342w,
        ${IMAGE_URL}w500${imageUrl} 500w,
        ${IMAGE_URL}w780${imageUrl} 780w
      `}
        sizes="(max-width: 480px) 185px, (max-width: 768px) 342px, (max-width: 1024px) 500px, 780px"
        {...rest}
      />
    </picture>
  );
};

export default PictureImage;
