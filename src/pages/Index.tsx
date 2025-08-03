
import UserRoleSelection from "../components/UserRoleSelection";
import { Navigate } from "react-router-dom";

const Index = () => {
  // We'll redirect to the main welcome page as we now have a dedicated role selection page
  return <Navigate to="/" replace />;
};

export default Index;
