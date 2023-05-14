import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import logoOutlineDark from "../../assets/logo-outline-dark.svg";
import userDataContext from "../../context/UserDataContext";
import cogoToast from "cogo-toast";

const ReferralCard = () => {
  const { id } = useContext(userDataContext);

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 2, md: 4 },
        my: 4,
        mx: "auto",
        position: "relative",
        width: "100%",
        background: "var(--dark)",
        maxWidth: "1024px",

        "&:before": {
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
        borderRadius: "1rem",
      }}
    >
      <Typography sx={{ fontSize: "1.2rem", fontWeight: 600, p: 1 }}>
        Referral Program
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent={{ xs: "center", sm: "space-between" }}
        gap={2}
        sx={{
          p: 2,
          mt: 4,
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(1,126,255,1)  0%, rgba(96,174,255,1)80%)",
          borderRadius: "1rem",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: 700, color: "var(--darker)", mb: 0.5 }}>
            Refer & Earn (Click the referral ID to copy it)
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 300 }}>
            Earn 5$ when you refer a friend and they make a deposit of over 10$
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              mt: 1,
              cursor: "pointer",
              color: "var(--dark)",
            }}
            onClick={() => {
              window.navigator.clipboard
                .writeText(
                  `https://${window.location.host}/register?refBy=${id}`
                )
                .then(() => cogoToast.success("Copied"));
            }}
          >
            {id}
          </Typography>
        </Box>
        <Image
          src={logoOutlineDark}
          alt="Logo outline dark for incrypto finance"
          style={{
            height: "80px",
            width: "80px",
            alignSelf: "flex-end",
          }}
        />
      </Stack>
    </Box>
  );
};

export default ReferralCard;
