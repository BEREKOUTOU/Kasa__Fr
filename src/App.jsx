import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/app.scss";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import FichLogement from "./pages/logement/FichLogment";
import NoPage from "./pages/error/NoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/logement/:id",
    element: <FichLogement />,
  },
  {
    path: "/404",
    element: <NoPage />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
