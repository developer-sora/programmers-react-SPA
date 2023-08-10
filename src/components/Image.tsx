/** @jsxImportSource @emotion/react */
import React, { ImgHTMLAttributes } from "react";
import { css } from "@emotion/react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  width: number;
  altText: string;
  height?: number;
}

export function Image({ width, height, altText, ...props }: Props) {
  return (
    <img
      css={css`
        width: ${width}px;
        height: ${height}px;
        object-fit: contain;
      `}
      alt={altText}
      {...props}
    />
  );
}
