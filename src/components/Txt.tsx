import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  typography?: "h1" | "h2" | "h3" | "p";
  color?: string;
  display?: "inline" | "block" | "inline-block";
}

export function Txt({
  typography = "p",
  color = "black",
  display = "inline",
  ...props
}: Props) {
  return (
    <span
      css={{
        margin: 0,
        padding: 0,
        color,
        lineHeight: 1.6,
        display,
        ...TYPOGRAPH_VARIANT[typography],
      }}
      {...props}
    />
  );
}

const TYPOGRAPH_VARIANT = {
  h1: {
    fontSize: "32px",
    fontWeight: 900,
  },
  h2: {
    fontSize: "24px",
    fontWeight: 800,
  },
  h3: {
    fontSize: "19px",
    fontWeight: 700,
  },
  h4: {
    fontSize: "16px",
    fontWeight: 700,
  },
  h5: {
    fontSize: "24px",
    fontWeight: 700,
  },
  p: {
    fontSize: "15px",
    fontWeight: 400,
  },
};
