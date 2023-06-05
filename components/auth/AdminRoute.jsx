import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/router";
import Spinner from "../Global/Spinner";
import userDataContext from "../../context/UserDataContext";
import { AdminDataProvider } from "../../context/AdminDataContext";

export default function AdminRoute({ children }) {
  const router = useRouter();
  const { checkingStatus, isAuthenticated } = useContext(AuthContext);
  const { fetchingData, userData } = useContext(userDataContext);

  useEffect(() => {
    if (!checkingStatus && !fetchingData && !isAuthenticated && !userData) {
      router.replace("/login");
    } else if (
      !checkingStatus &&
      !fetchingData &&
      isAuthenticated &&
      userData &&
      !userData.isAdmin
    ) {
      router.replace("/account");
    }
  }, [router, checkingStatus, isAuthenticated, userData, fetchingData]);

  return (
    <section id="admin-route">
      {checkingStatus && !isAuthenticated && <Spinner />}
      {fetchingData && !userData && <Spinner />}
      {!checkingStatus &&
        !fetchingData &&
        isAuthenticated &&
        userData &&
        userData.isAdmin && <AdminDataProvider>{children}</AdminDataProvider>}
    </section>
  );
}
