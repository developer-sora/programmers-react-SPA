import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Global, css } from "@emotion/react";
import { PageLayout } from "components";
import { CartPage, ProductPage, WebPage } from "pages";
import normalize from "emotion-normalize";

export default function App() {
  return (
    <>
      <Global
        styles={css`
          ${normalize}
        `}
      />
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/web" element={<WebPage />} />
            <Route path="/web/products/:productId" element={<ProductPage />} />
            <Route path="/web/cart" element={<CartPage />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </>
  );
}
