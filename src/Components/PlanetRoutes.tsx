import { Routes, Route, Navigate } from "react-router-dom";
import Planets from "./Planets";

function PlanetRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/planet/mercury" />} />
      <Route path="/planet/:planet" element={<Planets />} />
    </Routes>
  );
}

export default PlanetRoutes;
