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
import { TemsConditionsPage } from "@/pages/TemsConditionsPage";
import { PrivicePolicyPage } from "@/pages/PrivicePolicyPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routerPaths.main} element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path={routerPaths.about} element={<AboutPage />} />
      <Route path={routerPaths.ourService} element={<OurServicePage />} />
      <Route path={routerPaths.ourTeam} element={<OurTeamPage />} />
      <Route path={routerPaths.faq} element={<FAQPage />} />
      <Route path={routerPaths.pricingPlan} element={<PricingPlanPage />} />
      <Route
        path={routerPaths.temsAndConditions}
        element={<TemsConditionsPage />}
      />
      <Route path={routerPaths.privacyPolicy} element={<PrivicePolicyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
