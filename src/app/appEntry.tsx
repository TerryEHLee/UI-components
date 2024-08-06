import React from "react";
import ReactDOM from "react-dom/client";
import { appRouter } from "@/app/appRouter";
import { RouterProvider } from "react-router-dom";
import { appTheme } from "@/shared/ui/theme";
import { ThemeProvider } from "@mui/material";
import '@/shared/styles/_common.less'
import '@/shared/styles/_fonts.less'
import '@/shared/styles/_reset.less'
import '@/shared/styles/_utils.less'
import '@/shared/styles/appTheme-overrides.less'
import '@/shared/styles/layout.less'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme = {appTheme}>
    <RouterProvider router={appRouter()} />
    </ThemeProvider>
  </React.StrictMode>
);
