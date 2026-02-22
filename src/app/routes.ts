import { createBrowserRouter } from "react-router";
import { PriorityPassApp } from "./pages/PriorityPassApp";
import { TaxiApp } from "./pages/TaxiApp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PriorityPassApp,
  },
  {
    path: "/taxi-app",
    Component: TaxiApp,
  },
]);
