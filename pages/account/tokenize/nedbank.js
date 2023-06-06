import React from "react";
import PrivateRoute from "../../../components/auth/PrivateRoute";

const Nedbank = () => {
  return (
    <>
      <PrivateRoute>
        <div>Nedbank</div>
      </PrivateRoute>
    </>
  );
};

export default Nedbank;
