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

  /*NOTE: Sets the background color on hover using theme.*/
  const background = isHovered ? theme.palette.background.default : "#292841";

  const stackStyle: React.CSSProperties = {
    backgroundColor: background,
    padding: 0.5,
    borderRadius: 2,
    cursor: "pointer",
    color: "white",
    marginTop: 2,
    display: "flex",
  };

  const textStyle: React.CSSProperties = {
    color: isHovered ? "#292841" : "#caccd2",
    fontSize: 16,
    marginLeft: "4%",
    fontFamily: "Segoe UI",
  };

  /*NOTE: Handles opening the URL in a new tab and triggers onClick if provided.*/
  const handleOnClick = () => {
    window.open(props.url, "_blank");
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <Stack
      direction="row"
      sx={stackStyle}
      spacing={2}
      onClick={handleOnClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          color: isHovered ? "#292841" : "#caccd2",
        }}
      >
        {props.icon}
      </div>
      <div style={textStyle}>{props.url}</div>
    </Stack>
  );
};
