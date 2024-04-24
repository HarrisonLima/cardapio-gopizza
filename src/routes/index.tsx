import { BrowserRouter, Route, Routes } from "react-router-dom";
import Default from "../pages/Default";
import Menu from "../pages/Menu";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
