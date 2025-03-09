import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/layouts/Layout";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Skillpage from "./pages/Skillpage";
import Portfoliopage from "./pages/Portfoliopage";
import Contactpage from "./pages/Contactpage";
import ErrorPage from "./error-page";
import "./i18n";
import { store } from "./stores/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <Aboutpage />,
      },
      {
        path: "/skill",
        element: <Skillpage />,
      },
      {
        path: "/certificate",
        element: <Portfoliopage />,
      },
      {
        path: "/contact",
        element: <Contactpage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
