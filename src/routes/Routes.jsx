import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";
import CategoryNews from "../pages/categoryNews/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register.jsx/Register";
import NewsDetailsPage from "../pages/newsDetailsPage/NewsDetailsPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: (
      <div className="flex justify-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    ),
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: (
          <div className="flex justify-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/newsDetails/:id",
    loader: () => fetch("/news.json"),
    element: (
      <PrivateRoutes>
        <NewsDetailsPage></NewsDetailsPage>
      </PrivateRoutes>
    ),
    hydrateFallbackElement: <div className="flex justify-center"></div>,
  },
  {
    path: "*",
    element: (
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <p className="text-4xl text-red-500">Error 404</p>{" "}
        <p className="text-4xl text-red-500">Page Not Found</p>
      </div>
    ),
  },
]);

export default router;
