import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import MercuryPage from "./Pages/MercuryPage";
import VenusPage from "./Pages/VenusPage";
import HomePage from "./Pages/HomePage";
import EarthPage from "./Pages/EarthPage";
import MarsPage from "./Pages/MarsPage";
import SaturnPage from "./Pages/SaturnPage";
import UranusPage from "./Pages/UranusPage";
import NeptunePage from "./Pages/NeptunePage";
import JupiterPage from "./Pages/JupiterPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="mercury" element={<MercuryPage />} />
      <Route path="venus" element={<VenusPage />} />
      <Route path="earth" element={<EarthPage />} />
      <Route path="mars" element={<MarsPage />} />
      <Route path="jupiter" element={<JupiterPage />} />
      <Route path="saturn" element={<SaturnPage />} />
      <Route path="uranus" element={<UranusPage />} />
      <Route path="neptune" element={<NeptunePage />} />
    </Route>
  )
);

function NewApp() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default NewApp;
