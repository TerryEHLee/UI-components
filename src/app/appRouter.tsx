import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages/main";
import { LoginPage } from "@/pages/login/ui/Page";

export const appRouter = () =>
  createBrowserRouter([
    {
      // element: baseLayout,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },

        { path: "/login", element: <LoginPage /> },
      ],
    },
  ]);