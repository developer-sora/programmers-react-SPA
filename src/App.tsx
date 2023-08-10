import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLayout } from "components/PageLayout";
import { WebPage } from "pages/WebPage";
import { Global } from "@emotion/react";
import reset from "reset";
import { ProductPage } from "pages/ProductPage";

export default function App() {
  return (
    <>
      <Global styles={reset} />
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/web" element={<WebPage />} />
            <Route path="/web/products/:productId" element={<ProductPage />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </>
  );
}
