import { Route, Routes } from "react-router-dom";
import HomeLayout from "./apps/home/HomeLayout";
import HomeRoutes from "./apps/home/routes";
import AuthLayout from "./apps/auth/AuthLayout";
import AuthRoutes from "./apps/auth/routes";
import UserLayout from "./apps/user/UserLayout";
import UserRoutes from "./apps/user/router/indexx";

function Routers() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          {HomeRoutes.map((elm) => (
            <Route element={elm.element} path={elm.path} key={elm.id} />
          ))}
        </Route>
        <Route element={<AuthLayout />}>
          {AuthRoutes.map((elm) => (
            <Route element={elm.element} path={elm.path} key={elm.id} />
          ))}
        </Route>
        <Route element={<UserLayout />}>
          {UserRoutes.map((elm) => (
            <Route element={elm.element} path={elm.path} key={elm.id} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default Routers;
