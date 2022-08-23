import React from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        {component()}
      </React.Suspense>
    </BrowserRouter>
  );
