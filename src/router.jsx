import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Test from "./Pages/Test";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:slug",
        element: <Product />,
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      }
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default router;