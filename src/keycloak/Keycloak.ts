import Keycloak from "keycloak-js";
import { config } from "../helpers/Constants";

export const keycloak = new Keycloak({
  url: `${config.url.KEYCLOAK_URL}`,
  realm: `${config.keycloak.REALM}`,
  clientId: `${config.keycloak.CLIENT_ID}`,
});
