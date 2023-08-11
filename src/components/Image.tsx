import { ImgHTMLAttributes } from "react";
import { css } from "@emotion/react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  width: number;
  alt: string;
  height?: number;
}

export function Image({ width, alt, height, ...props }: Props) {
  return (
    <img
      css={css`
        width: ${width}px;
        height: ${height}px;
        object-fit: contain;
      `}
      alt={alt}
      {...props}
    />
  );
}
