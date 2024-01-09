import MainPage from "@/pages/MainPage/MainPage";
import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routerPaths } from "./routerPaths";
import Root from "./Root";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routerPaths.main} element={<Root />}>
      <Route index element={<MainPage />}></Route>
    </Route>
  )
);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
