import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main";

export const appRouter = () =>
  createBrowserRouter([
    {
      // element: baseLayout,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
      ],
    },
  ]);
