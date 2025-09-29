import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Like from "../pages/like";
import MainLayout from "../components/main-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/like",
        element: <Like />,
      },
    ],
  },
]);
