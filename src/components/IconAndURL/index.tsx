import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material";

interface IIconAndURL {
  icon: React.ReactNode;
  url: string;
  onClick?: () => void;
}

export const IconAndURL = ({ ...props }: IIconAndURL) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const background = isHovered
    ? theme.palette.background.default
    : "transparent";

  const stackStyle: React.CSSProperties = {
    backgroundColor: background,
    padding: 0.5,
    borderRadius: 2,
    cursor: "pointer",
  };

  const textStyle: React.CSSProperties = {
    color: theme.palette.text.secondary,
    fontSize: 16,
    marginLeft: "4%",
    fontFamily: "Segoe UI",
  };

  const handleOnClick = () => {
    window.open(props.url, "_blank");
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <Stack
      sx={stackStyle}
      direction="row"
      spacing={2}
      onClick={handleOnClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>{props.icon}</div>
      <div style={textStyle}>{props.url}</div>
    </Stack>
  );
};
