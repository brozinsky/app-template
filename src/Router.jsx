import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Homepage from "@/pages/Homepage";
import ErrorPage from "@/pages/ErrorPage";
import LayoutPage from "@/pages/LayoutPage";
import EcommercePage from "@/pages/EcommercePage";
import ProfilePage from "@/pages/ProfilePage";
import ButtonPage from "@/pages/components/ButtonPage";
import CheckboxPage from "@/pages/components/CheckboxPage";
import InputPage from "@/pages/components/InputPage";
import TogglePage from "@/pages/components/TogglePage";
import FlexPage from "@/pages/layout/FlexPage";
import GridPage from "@/pages/layout/GridPage";
import TypographyPage from "@/pages/layout/TypographyPage";
import AudioPage from "@/pages/AudioPage";
import CategoriesPage from "@/pages/layout/CategoriesPage";
import FaqPage from "@/pages/components/FaqPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/components/button",
        element: <ButtonPage />,
    },
    {
        path: "/components/checkbox",
        element: <CheckboxPage />,
    },
    {
        path: "/components/input",
        element: <InputPage />,
    },
    {
        path: "/components/toggle",
        element: <TogglePage />,
    },
    {
        path: "/components/faq",
        element: <FaqPage />,
    },
    {
        path: "/layout/flex",
        element: <FlexPage />,
    },
    {
        path: "/layout/grid",
        element: <GridPage />,
    },
    {
        path: "/layout/categories",
        element: <CategoriesPage />,
    },
    {
        path: "/layout/typography",
        element: <TypographyPage />,
    },
    {
        path: "layout",
        element: <LayoutPage />,
    },
    {
        path: "e-commerce",
        element: <EcommercePage />,
    },
    {
        path: "profile",
        element: <ProfilePage />,
    },
    {
        path: "audio",
        element: <AudioPage />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
