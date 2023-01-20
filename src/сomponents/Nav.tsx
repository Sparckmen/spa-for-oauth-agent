import { useKeycloak } from "@react-keycloak/web";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import simpleService from "../services/simple.service";
import styles from "./Nav.module.scss";

const Nav = () => {
  // const { keycloak } = useKeycloak();
  // const navigate = useNavigate();
  // const handleLogInOut = () => {
  //   if (keycloak.authenticated) {
  //     keycloak.logout();
  //     navigate("/");
  //   } else {
  //     keycloak.login();
  //   }
  // };

  return (
    <div className={styles.header}>
      <div className={styles.navList}>
        <h1>Keycloak React AUTH</h1>
        <ul className={styles.navList}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/secured">Secured Page</a>
          </li>
        </ul>
      </div>
      <div className={styles.logButton}>
        {/* <Link to="/login">Login</Link>  */}
        {/* {!!keycloak.authenticated ? (
          <button type="button" onClick={() => keycloak.logout()}>
            logout
          </button>
        ) : (
          <button type="button" onClick={() => keycloak.login()}>
            Login
          </button>
        )} */}

        <button type="button" onClick={() => simpleService.login()}>Login</button>
      </div>
    </div>
  );
};

export default Nav;
