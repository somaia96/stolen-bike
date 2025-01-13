import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Alert from "@/components/Alert";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Alert />} />
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
