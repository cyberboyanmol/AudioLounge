import AppConfig from "./AppConfig";

const ServiceConfig = {
  refreshTokenEndPoint: `${AppConfig.BASE_URL}/auth/refresh-token`,
  loginEndPoint: `${AppConfig.BASE_URL}/auth/login`,
  verifyEndPoint: `${AppConfig.BASE_URL}/auth/verify`,
  activateAccount: `${AppConfig.BASE_URL}/user/activate`,
  getCurrentUser: `${AppConfig.BASE_URL}/user/me`,
};

export default ServiceConfig;
