import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/router";
import Spinner from "../Global/Spinner";

export default function ({ children }) {
  const router = useRouter();
  const { checkingStatus, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!checkingStatus && !isAuthenticated) {
      router.replace("/login");
    }
  }, [checkingStatus, isAuthenticated]);

  return (
    <section id="private-route">
      {checkingStatus && !isAuthenticated && <Spinner />}
      {!checkingStatus && isAuthenticated && <div>{children}</div>}
    </section>
  );
}
