import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Stack,
  IconButton,
} from "@mui/material";
import { MdOutlineClose } from "react-icons/md";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "var(--dark)",
  boxShadow: 24,
  borderRadius: 1,
  color: "var(--mid)",
  width: "98%",
  maxWidth: "512px",
  backdropFilter: "blur(16px)",
};

export default function PopupModal({
  children,
  title = "Title",
  open = false,
  handleClose,
  sx = {},
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            maxHeight: "600px",
            overflowY: "scroll",
            ...sx,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            id="modal-modal-title"
            py={2}
            px={3}
            sx={{ borderBottom: "1px solid var(--blue)" }}
          >
            <Typography
              component="p"
              fontWeight={800}
              textTransform="uppercase"
            >
              {title}
            </Typography>
            <IconButton sx={{ color: "var(--mid)" }} onClick={handleClose}>
              <MdOutlineClose />
            </IconButton>
          </Stack>
          <Box id="modal-modal-description" sx={{ my: 2, py: 2, px: 3 }}>
            {children}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
