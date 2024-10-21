import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../paginas/home";
import Alta from "../paginas/alta";
import Baja from "../paginas/baja";
import Consulta from "../paginas/consulta";
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
