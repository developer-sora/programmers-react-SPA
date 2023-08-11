import { HTMLAttributes, ReactNode } from "react";
import { css } from "@emotion/react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  padding: number | string;
  children: ReactNode;
  width?: number;
  height?: number;
  margin?: number | string;
}

export function Box({
  padding,
  children,
  width,
  height,
  margin,
  ...props
}: Props) {
  return (
    <div
      css={css`
        width: ${width}px;
        height: ${height}px;
        background: #fff;
        padding: ${padding}px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin: ${margin}px;
      `}
      {...props}
    >
      {children}
    </div>
  );
}
