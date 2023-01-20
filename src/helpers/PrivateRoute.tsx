import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  //const { keycloak } = useKeycloak();
  const loggedIn = true;

  return loggedIn ? <Outlet /> : <Navigate to="/" />;
};
