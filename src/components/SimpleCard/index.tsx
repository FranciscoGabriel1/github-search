import React, { ReactNode } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { SxProps, Theme, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

interface SimpleCardProps {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
  sx?: SxProps<Theme>;
  onClick: () => void;
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  children,
  width = "100%",
  height = "auto",
  onClick,
  sx,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 1300px)");

  const defaultStyle: SxProps<Theme> = {
    backgroundColor: "#fff",
    color: "black",
    maxWidth: isMobile ? "90%" : "60%", // Ajuste o maxWidth para telas menores
    width,
    height,
    borderRadius: "16px",
    boxShadow: "0px 4px 4px 0px rgba(176, 193, 225, 0.25)",
    margin: "auto",
    border: `1px solid ${theme.palette.background.default}`,
    padding: 0,
    "&:hover": {
      background: "#e3eff7",
      cursor: "pointer",
    },
    ...sx,
  };

  return (
    <Card sx={defaultStyle} onClick={onClick}>
      {children}
    </Card>
  );
};

export default SimpleCard;
