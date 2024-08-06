import { createBrowserRouter } from "react-router-dom";
import { MainPage, LoginPage, EnrollmentPage } from "@/pages";

export const appRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/enrollment",
        element: <EnrollmentPage /> },
  ]);