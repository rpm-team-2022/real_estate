import { Outlet, Navigate } from "react-router-dom";
const PrivateRoutes = (isAuthorized = false) => {
  return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
