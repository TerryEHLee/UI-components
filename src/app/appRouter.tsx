import { createBrowserRouter } from "react-router-dom";

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
