import {
  Box,
  Divider,
  IconButton,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ReactNode } from "react";
import { UilTimes } from "@iconscout/react-unicons";

interface CustomModalProps {
  title: ReactNode;
  children: ReactNode;
  open: boolean;
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: number;
  height?: number;

}

const CustomModal: React.FC<CustomModalProps> = ({
  title,
  children,
  open,
  onClose,
  onClick,
  width = 697,
  height = "auto",
}) => {

  const isMobile = useMediaQuery("(max-width:600px)");

  const modalContentStyle = {
    width: isMobile ? "100%" : width,
    height: height,
    display: "flex",
    flexDirection: "column",
    outline: "none",
    borderRadius: 6,
    backgroundColor: "white",
    position: "relative",
    overflow: "auto",
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={modalStyle}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalContentStyle}>
        <IconButton onClick={onClick} sx={closeButtonStyle}>
          <UilTimes sx={{ width: 15, height: 14.5 }} color="#292841" />
        </IconButton>
        <Box sx={{ padding: "1rem 0px 4px 24px" }}>
          <Typography
            sx={{
              color: "#000",
              fontFamily: "Segoe UI, sans-serif",
              fontSize: isMobile ? "12pt" : "17pt",
              fontWeight: 700,
              lineHeight: "46px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {title}
          </Typography>
        </Box>

        <Divider />

        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const closeButtonStyle = {
  position: "absolute",
  top: 14,
  right: 20,
  cursor: "pointer",
};
