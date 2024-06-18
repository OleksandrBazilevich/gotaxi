import { FC, PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../entities/Auth/lib/useAuth";

const ProtectedRoutes: FC<PropsWithChildren> = ({ children }) => {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.id) navigate("/login");
  }, []);

  return <>{children}</>;
};

export default ProtectedRoutes;
