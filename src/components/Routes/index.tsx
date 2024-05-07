import { HashRouter as Router, Route, Routes } from "react-router-dom";
import routesConfig from "@config/routes";
import Home from "@pages/Home";

const RouterProvider: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={routesConfig.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterProvider;
