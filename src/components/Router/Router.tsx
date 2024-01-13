import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routerPaths } from "./routerPaths";
import Root from "./Root";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { OurServicePage } from "@/pages/OurServicePage";
import { PricingPlanPage } from "@/pages/PricingPlanPage";
import { OurTeamPage } from "@/pages/OurTeamPage";
import { FAQPage } from "@/pages/FAQPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routerPaths.main} element={<Root />}>
      <Route index element={<MainPage />}></Route>
      <Route path={routerPaths.about} element={<AboutPage />}></Route>
      <Route path={routerPaths.ourService} element={<OurServicePage />}></Route>
      <Route path={routerPaths.ourTeam} element={<OurTeamPage />}></Route>
      <Route path={routerPaths.faq} element={<FAQPage />}></Route>
      <Route
        path={routerPaths.pricingPlan}
        element={<PricingPlanPage />}
      ></Route>
    </Route>
  )
);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
