/** @jsxImportSource @emotion/react */

import React, { HTMLAttributes, ReactNode } from "react";
import { css } from "@emotion/react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  padding: number | string;
  children: ReactNode;
  margin?: number;
}

export function ImageBox({ width, padding, children, margin = 0 }: Props) {
  return (
    <div
      css={css`
        width: ${width}px;
        background: #fff;
        padding: ${padding}px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin: ${margin}px;
      `}
    >
      {children}
    </div>
  );
}
