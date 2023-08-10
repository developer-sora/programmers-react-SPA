/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary";
  size?: "medium" | "large";
}

export function Button({
  variant = "primary",
  size = "medium",
  ...props
}: Props) {
  return (
    <button
      css={{
        outline: "none",
        cursor: "pointer",
        borderRadius: "8px",
        ...TYPE_VARIANTS[variant],
        ...SIZE_VARIANTS[size],
      }}
      {...props}
    />
  );
}

const TYPE_VARIANTS = {
  primary: {
    color: "#fff",
    backgroundColor: "#1890ff",
    border: "1px solid #40a9ff",
    "&:hover": {
      backgroundColor: "#0050b3",
    },
  },
};

const SIZE_VARIANTS = {
  medium: {
    width: "100%",
    fontSize: "1.2rem",
    padding: "10px",
  },
  large: {
    fontSize: "17px",
    padding: "11px 22px",
  },
};
