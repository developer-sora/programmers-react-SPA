import { ReactNode } from "react";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      css={{
        width: "100%",
        height: "100%",
        maxWidth: "1200px",
        margin: "24px auto",
      }}
    >
      {children}
    </div>
  );
}
