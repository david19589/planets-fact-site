import { BrowserRouter } from "react-router-dom";
import PlanetRoutes from "./Components/PlanetRoutes";
import Planets from "./Components/Planets";

function App() {
  return (
    <BrowserRouter>
      <PlanetRoutes />
      <Planets />
    </BrowserRouter>
  );
}

export default App;
