import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

// Detail Layout and its pages
import DetailLayout from "./layouts/DetailLayout";
import GameEngineeringDetails from "./components/sections/development/GameEngineeringDetails";
import WebEngineeringDetails from "./components/sections/development/WebEngineeringDetails";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "detail",
        element: <DetailLayout />,
        children: [
          { path: "game-engineering", element: <GameEngineeringDetails /> },
          { path: "web-engineering", element: <WebEngineeringDetails /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
