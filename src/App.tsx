import "./App.css";
import Nav from "./сomponents/Nav";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SecuredPage from "./pages/SecuredPage";
import { PrivateRoute } from "./helpers/PrivateRoute";
import { keycloak } from "./keycloak/Keycloak";
import { KeycloakInitOptions } from "keycloak-js";

const initOptions: KeycloakInitOptions = {
  onLoad: "check-sso",
  checkLoginIframe: true,
  pkceMethod: "S256",
};

function App() {
  return (
    // <div>
    // <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<Homepage />} />
            <Route path="/secured" element={<PrivateRoute />}>
              <Route path="/secured" element={<SecuredPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    // </ReactKeycloakProvider>
    // {/* // </div> */}
  );
}

export default App;
