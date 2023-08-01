import { useNavigate } from "react-router-dom";
import { useAuthToken } from "../services/authTokenStore/useAuthToken";
import { getDashboardHomePath, getLoginPath } from "../components/routes/paths";
import { useEffect } from "react";

export const RootPage = () => {
  const { token } = useAuthToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate(getDashboardHomePath());
      return;
    }

    navigate(getLoginPath());
  }, [navigate, token]);

  return null;
};
