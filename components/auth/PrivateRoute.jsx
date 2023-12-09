import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import userDataContext from '../../context/UserDataContext';
import Spinner from '../Global/Spinner';

export default function PrivateRoute({ children }) {
  const router = useRouter();
  const { checkingStatus, isAuthenticated } = useContext(AuthContext);
  const { fetchingData, userData } = useContext(userDataContext);

  useEffect(() => {
    if (!checkingStatus && !fetchingData && !isAuthenticated && !userData) {
      router.replace('/login');
    }
  }, [router, checkingStatus, isAuthenticated, userData, fetchingData]);

  return (
    <section id='private-route'>
      {checkingStatus && !isAuthenticated && <Spinner />}
      {fetchingData && !userData && <Spinner />}
      {!checkingStatus && !fetchingData && isAuthenticated && userData && (
        <>{children}</>
      )}
    </section>
  );
}
