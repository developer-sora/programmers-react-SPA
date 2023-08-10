/** @jsxImportSource @emotion/react */

import { ReactNode } from "react";
import { css } from "@emotion/react";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 24px;
        margin-bottom: 24px;
      `}
    >
      {children}
    </div>
  );
}
