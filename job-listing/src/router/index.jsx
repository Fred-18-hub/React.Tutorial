import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import JobPage, { jobLoader } from "@/pages/JobPage";
import JobsPage from "@/pages/JobsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const routes = createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/jobs" element={<JobsPage />} />
    <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
);

const router = createBrowserRouter(routes);

export default router;
