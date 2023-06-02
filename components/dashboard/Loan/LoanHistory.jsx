import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import PopupModal from "../../Global/Modal";
import parseDate from "../../../utils/parseDate";
import { RiBankFill } from "react-icons/ri";
import { RiFolder5Fill } from "react-icons/ri";
import React, { useContext } from "react";
import { useState } from "react";

const LoanHistory = ({
  transactions = [],
  currency = "$",
  customStyles = {},
  modalOpen = false,
  handleModalOpen,
  handleModalClose,
}) => {
  const [modalBody, setModalBody] = useState(null);

  return (
    <Box
      sx={{
        ...customStyles,
        my: 4,
        position: "relative",
        width: "100%",
        background: "var(--dark)",
        zIndex: 2,

        "&:after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          opacity: 0.5,
          background: `url("https://firebasestorage.googleapis.com/v0/b/elite-financial-services.appspot.com/o/pattern.png?alt=media&token=657fc54a-3643-40cb-b691-15c566a9f527") no-repeat center center/cover`,
        },

        "& *": {
          zIndex: 2,
        },
        borderRadius: "0.5rem",
      }}
    >
      <PopupModal
        title="Loan Details"
        open={modalOpen}
        handleOpen={handleModalOpen}
        handleClose={handleModalClose}
      >
        {modalBody && (
          <>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              px={1}
              py={1}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  color: "var(--mid)",
                  fontSize: "14px",
                }}
              >
                Status
              </Typography>

              <Typography
                component="span"
                fontWeight={500}
                sx={{
                  textTransform: "capitalize",
                  color: "#fff",
                  px: 2,
                  py: 0.5,
                  background:
                    modalBody?.status === "pending"
                      ? "var(--secondary)"
                      : modalBody?.status === "approved"
                      ? "var(--green)"
                      : "var(--red)",
                  fontSize: "14px",
                  borderRadius: "4px",
                }}
              >
                {modalBody?.status}
              </Typography>
            </Stack>
            <Divider color="#555" />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              px={1}
              py={1}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  color: "var(--mid)",
                  fontSize: "14px",
                }}
              >
                Amount
              </Typography>

              <Typography
                component="span"
                fontWeight={700}
                sx={{
                  textTransform: "capitalize",
                  color: "var(--mid)",
                  fontSize: "14px",
                }}
              >
                {currency} {modalBody?.amount.toLocaleString()}
              </Typography>
            </Stack>
            <Divider color="#555" />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              px={1}
              py={1}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  color: "var(--mid)",
                  fontSize: "14px",
                }}
              >
                Duration
              </Typography>
              <Typography
                component="span"
                fontWeight={700}
                sx={{
                  textTransform: "capitalize",
                  color: "var(--mid)",
                  fontSize: "14px",
                }}
              >
                {modalBody?.duration} Months
              </Typography>
            </Stack>
            <Divider color="#555" />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              px={1}
              py={1}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  color: "var(--mid)",
                  fontSize: "14px",
                }}
              >
                Monthly Installment
              </Typography>

              <Typography
                component="span"
                fontWeight={700}
                sx={{
                  textTransform: "capitalize",
                  color: "var(--mid)",
                  fontSize: "14px",
                }}
              >
                {currency}{" "}
                {Math.round(
                  (0.15 * modalBody?.amount) / modalBody?.duration +
                    modalBody?.amount / modalBody?.duration
                ).toLocaleString()}
                /Month
              </Typography>
            </Stack>
            <Divider color="#555" />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              px={1}
              py={1}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  color: "var(--mid)",
                  fontSize: "14px",
                }}
              >
                Application Date
              </Typography>

              <Typography
                component="span"
                fontWeight={700}
                sx={{
                  textTransform: "capitalize",
                  color: "var(--mid)",
                  fontSize: "14px",
                }}
              >
                {parseDate(modalBody?.application_date?.seconds * 1000)}
              </Typography>
            </Stack>
            <Divider color="#555" />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              px={1}
              py={1}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  color: "var(--mid)",
                  fontSize: "14px",
                }}
              >
                Payout Date
              </Typography>

              <Typography
                component="span"
                fontWeight={700}
                sx={{
                  textTransform: "capitalize",
                  color: "var(--mid)",
                  fontSize: "14px",
                }}
              >
                {modalBody?.status === "pending"
                  ? ". . ."
                  : modalBody?.status === "approved"
                  ? parseDate(modalBody?.payout_date?.seconds * 1000)
                  : modalBody?.status === "declined"
                  ? ". . ."
                  : ". . ."}
              </Typography>
            </Stack>
            <Divider color="#555" />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              px={1}
              py={1}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  color: "var(--mid)",
                  fontSize: "14px",
                }}
              >
                Repayment Date
              </Typography>

              <Typography
                component="span"
                fontWeight={700}
                sx={{
                  textTransform: "capitalize",
                  color: "var(--mid)",
                  fontSize: "14px",
                }}
              >
                {modalBody?.status === "pending"
                  ? ". . ."
                  : modalBody?.status === "approved"
                  ? parseDate(modalBody?.repayment_date)
                  : modalBody?.status === "declined"
                  ? ". . ."
                  : ". . ."}
              </Typography>
            </Stack>
            <Divider color="#555" />
          </>
        )}
      </PopupModal>
      {transactions.length > 0 ? (
        <Box sx={{ mt: 4 }}>
          {[...transactions]
            .sort(
              (a, b) =>
                new Date(b.dated?.seconds * 1000).getTime() -
                new Date(a.dated?.seconds * 1000).getTime()
            )
            .map((transaction, index) => (
              <>
                <div
                  key={`${transaction.type}-${index}_${index * 0.5}`}
                  onClick={() => {
                    handleModalOpen();
                    setModalBody(transaction);
                  }}
                  style={{ cursor: "pointer", width: "100%" }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    px={1}
                    py={1}
                    sx={{ cursor: "pointer", width: "100%" }}
                  >
                    <Stack direction="row" alignItems="center" gap={1}>
                      {transaction?.type.toLowerCase() === "loan" ? (
                        <span className="transaction-icon loan">
                          <RiBankFill />
                        </span>
                      ) : (
                        ""
                      )}
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "var(--mid)",
                        }}
                      >
                        {currency} {transaction?.amount.toLocaleString()}
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "var(--mid)",
                        textAlign: "right",
                      }}
                    >
                      <Typography
                        component="span"
                        fontWeight={700}
                        sx={{
                          textTransform: "uppercase",
                          color:
                            transaction.status === "approved"
                              ? "var(--green)"
                              : transaction.status === "pending"
                              ? "var(--secondary)"
                              : transaction.status === "declined"
                              ? "var(--red)"
                              : "var(--pale-blue)",
                          fontSize: "12px",
                        }}
                      >
                        {transaction.status}
                      </Typography>{" "}
                      <br />
                      <Typography
                        component="span"
                        sx={{
                          textTransform: "capitalize",
                          color: "var(--mid)",
                          fontSize: "12px",
                        }}
                      >
                        {transaction?.status === "pending"
                          ? parseDate(
                              transaction?.application_date?.seconds * 1000
                            )
                          : ". . ."}
                      </Typography>
                    </Typography>
                  </Stack>
                </div>
                <Divider color="#555" />
              </>
            ))}
        </Box>
      ) : (
        <Typography sx={{ textAlign: "center", opacity: 0.5, mt: 4 }}>
          <RiFolder5Fill style={{ fontSize: "4rem" }} /> <br />
          <Typography component="span" mt={1}>
            No Transactions
          </Typography>
        </Typography>
      )}
    </Box>
  );
};

export default LoanHistory;
