import Image from "next/image";
import React from "react";
import { BannerImageProps } from "./BannerImage";

const BannerImage: React.FC<BannerImageProps> = ({
  src: source,
  alt,
  className,
  ...props
}) => {
  const [src, setSrc] = React.useState(source);
  return (
    <div className="relative  pt-[45%] lg:pt-[35%] xl:pt-[40%]  ">
      <Image
        fill={true}
        className={`eventCardImage ${className}`}
        src={src}
        alt={alt}
        placeholder="blur"
        {...props}
        blurDataURL="/images/audiolounge.png"
      />
    </div>
  );
};

export default React.memo(BannerImage);
