import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/router";
import Spinner from "../Global/Spinner";
import userDataContext from "../../context/UserDataContext";

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const { checkingStatus, isAuthenticated } = useContext(AuthContext);
  const { fetchingData, userData } = useContext(userDataContext);

  useEffect(() => {
    if (!checkingStatus && !fetchingData && !isAuthenticated && !userData) {
      router.replace("/login");
    }
  }, [router, checkingStatus, isAuthenticated, userData]);

  return (
    <section id="private-route">
      {checkingStatus && !isAuthenticated && <Spinner />}
      {fetchingData && !userData && <Spinner />}
      {!checkingStatus && !fetchingData && isAuthenticated && userData && (
        <div>{children}</div>
      )}
    </section>
  );
}
