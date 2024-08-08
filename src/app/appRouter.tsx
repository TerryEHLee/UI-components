import { createBrowserRouter } from "react-router-dom";
import { MainPage, LoginPage, EnrollmentPage } from "@/pages";
import { MainLayout } from "./layouts";

export const AppRouter = () =>

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
      element: <MainLayout />, 
      children: [
        
        {
          path: "/enrollment",
          element: <EnrollmentPage />,
        },
      ],
    },
  ])