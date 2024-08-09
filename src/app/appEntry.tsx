import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "@/app/appRouter";
import { RouterProvider } from "react-router-dom";
import { appTheme } from "@/shared/ui/theme";
import { ThemeProvider } from "@mui/material";

import '@/shared/styles/_common.less'
import '@/shared/styles/layout.less'
import '@/shared/styles/layout-rpmcare.less'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme = {appTheme}>
    <RouterProvider router={AppRouter()} />
    </ThemeProvider>
  </React.StrictMode>
);


