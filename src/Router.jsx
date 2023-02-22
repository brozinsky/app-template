import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import RootRoute from "@/routes/RootRoute";
import Page1Route from "@/routes/Page1Route";
import Page2Route from "@/routes/Page2Route";
import Page3Route from "@/routes/Page3Route";
import ErrorRoute from "@/routes/ErrorRoute";
import LayoutRoute from "@/routes/LayoutRoute";
import EcommerceRoute from "@/routes/EcommerceRoute";
import ProfileRoute from "@/routes/ProfileRoute";
import ButtonRoute from "@/routes//components/ButtonRoute";
import CheckboxRoute from "@/routes//components/CheckboxRoute";
import InputRoute from "@/routes//components/InputRoute";
import ToggleRoute from "@/routes//components/ToggleRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootRoute />,
        errorElement: <ErrorRoute />,
    },
    {
        path: "/components/button",
        element: <ButtonRoute />,
    },
    {
        path: "/components/checkbox",
        element: <CheckboxRoute />,
    },
    {
        path: "/components/input",
        element: <InputRoute />,
    },
    {
        path: "/components/toggle",
        element: <ToggleRoute />,
    },
    {
        path: "page-1",
        element: <Page1Route />,
    },
    {
        path: "page-2",
        element: <Page2Route />,
    },
    {
        path: "page-3",
        element: <Page3Route />,
    },
    {
        path: "layout",
        element: <LayoutRoute />,
    },
    {
        path: "e-commerce",
        element: <EcommerceRoute />,
    },
    {
        path: "profile",
        element: <ProfileRoute />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
