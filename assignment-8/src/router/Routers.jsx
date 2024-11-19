import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Statistics from "../pages/Statistics";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../components/ErrorPage";
import GadgetsCard from "../components/GadgetsCard";
import GadgetsDetails from "../pages/GadgetsDetails";
const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></ Home>,
                loader: () => fetch('../gadgets.json'),
                children: [
                    {
                        path: '/',
                        element: <GadgetsCard></GadgetsCard>,
                        loader: () => fetch('../allCategories.json')
                    },
                    {
                        path: '/gadgets/:gadgets',
                        element: <GadgetsCard></GadgetsCard>,
                        loader: () => fetch('../allCategories.json')
                    }
                ]
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                loader: () => fetch('../allCategories.json')
            },
            {
                path: '/gadgetsDetails/:category',
                element: <GadgetsDetails />,
                loader: () => fetch('../allCategories.json')
            },
        ]
    },
]);

export default routers
