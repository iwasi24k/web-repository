import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },

      // {
      //   path: "detail",
      //   element: <DetailLayout />,
      //   children: [
      //     { path: "game", element: <GameDetail /> },
      //     { path: "web", element: <WebDetail /> },
      //   ],
      // },
      
      // { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
