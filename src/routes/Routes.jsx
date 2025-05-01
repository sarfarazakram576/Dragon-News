import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/home/Home";
import CategoryNews from "../pages/categoryNews/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/category/:id',
                Component: CategoryNews
            }
        ]
    }
])

export default router;