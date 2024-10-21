import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../paginas/Home";
import Alta from "../paginas/Alta";
import Baja from "../paginas/Baja";
import Consulta from "../paginas/Consulta";
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Alta" element={<Alta />} />
      <Route path="/Baja" element={<Baja />} />
      <Route path="/Consulta" element={<Consulta />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
