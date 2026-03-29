import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PlanEvent } from "./components/PlanEvent";
import { Results } from "./components/Results";
import { GalleryPage } from "./pages/GalleryPage";
import { VenuePage } from "./pages/VenuePage";
import { DecorPage } from "./pages/DecorPage";
import { CateringPage } from "./pages/CateringPage";
import { PhotographyPage } from "./pages/PhotographyPage";
import { BespokePage } from "./pages/BespokePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/plan-event",
    Component: PlanEvent,
  },
  {
    path: "/results",
    Component: Results,
  },
  {
    path: "/gallery/:categoryId",
    Component: GalleryPage,
  },
  {
    path: "/services/venue",
    Component: VenuePage,
  },
  {
    path: "/services/decor",
    Component: DecorPage,
  },
  {
    path: "/services/catering",
    Component: CateringPage,
  },
  {
    path: "/services/photography",
    Component: PhotographyPage,
  },
  {
    path: "/services/bespoke",
    Component: BespokePage,
  },
]);
