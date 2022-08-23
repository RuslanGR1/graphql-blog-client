import { Routes, Route } from "react-router-dom";

import { Routing } from "pages";
import { withProviders } from "./providers";

const LayoutApp = () => <Routing />;

export const App = withProviders(() => (
  <Routes>
    <Route path="/*" element={<LayoutApp />}></Route>
  </Routes>
));
