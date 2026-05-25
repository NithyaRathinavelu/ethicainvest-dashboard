import { createBrowserRouter, Navigate } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { OnboardingQuiz } from "./screens/OnboardingQuiz";
import { Dashboard } from "./screens/Dashboard";
import { Insights } from "./screens/Insights";
import { CaseStudy } from "./screens/CaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/onboarding" replace />,
      },
      {
        path: "onboarding",
        Component: OnboardingQuiz,
      },
      {
        path: "dashboard",
        Component: Dashboard,
      },
      {
        path: "insights",
        Component: Insights,
      },
      {
        path: "case-study",
        Component: CaseStudy,
      },
    ],
  },
]);
