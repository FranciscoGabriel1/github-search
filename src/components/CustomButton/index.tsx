import {
  Box,
  Button,
  ButtonProps,
  CircularProgress,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { UilImport } from "@iconscout/react-unicons";

export interface CustomButtonProps
  extends Omit<ButtonProps<"button">, "variant"> {
  variant?: CustomButtonVariant;
  title: string;
  onClick?: () => void;
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant = CustomButtonVariant.CONTAINED,
  onClick,
  ...buttonProps
}) => {
  const { sx: buttonSxProps } = buttonProps;
  const theme = useTheme();

  /*Determines the button text color based on the variant.*/
  const getColorText = () => {
    if (variant.toLowerCase().includes("contained")) {
      return "shadesOfDark.white";
    }
    if (variant.toLowerCase().includes("outlined")) {
      return "shadesOfDark.black";
    }

    if (variant.toLowerCase().includes("disabled")) {
      return "shadesOfDark.medium";
    }
    return "shadesOfDark.black";
  };

  /*Determines the button background color based on the variant*/
  const getBackgroundButton = () => {
    if (variant.toLowerCase().includes("contained")) {
      return "shadesOfDark.black";
    }
    if (variant.toLowerCase().includes("outlined")) {
      return "shadesOfDark.white";
    }
    if (variant.toLowerCase().includes("disabled")) {
      return "shadesOfDark.ultraLight";
    }
    return "shadesOfDark.white";
  };

  /*Returns the download button color, specific to the outlined variant. */
  const getColorDownloadButton = () => {
    if (variant.toLowerCase().includes("outlined")) {
      return theme.palette.shadesOfDark.black;
    }
    return undefined;
  };

  /* Sets the button border based on the variant*/
  const getBorder = () => {
    if (variant.toLowerCase().includes("outlined")) {
      return `1px solid ${theme.palette.shadesOfDark.black}`;
    }
    return `1px solid ${theme.palette.shadesOfDark.white}`;
  };

  /*Determines the progress indicator color based on the variant.*/
  const getProgressColor = () => {
    if (variant.toLowerCase().includes("outlined")) {
      return theme.palette.shadesOfDark.black;
    }
    return theme.palette.shadesOfDark.white;
  };

  /*Checks if the button is a download button.*/
  const isDownloadButton = variant.toLowerCase().includes("download");

  /*Checks if the button is in a loading state.*/ const isLoading = variant
    .toLowerCase()
    .includes("loading");

  const CustomProgress: React.FC = () => {
    return (
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ opacity: 0 }}
        >
          <Typography fontFamily={"Segoe UI"} fontWeight={700}>
            {title}
          </Typography>
          {isDownloadButton && (
            <UilImport
              style={{ marginLeft: 1.5 }}
              color={getColorDownloadButton()}
            />
          )}
        </Box>
        <CircularProgress
          size={16}
          color={"primary"}
          sx={{
            position: "absolute",
            "&.MuiCircularProgress-colorPrimary": {
              color: getProgressColor,
            },
          }}
        />
      </Box>
    );
  };

  return (
    <Button
      {...buttonProps}
      sx={{
        color: "#fff",
        bgcolor: getBackgroundButton(),
        border: getBorder(),
        px: 2,
        py: 1,
        "&:hover": {
          backgroundColor: getBackgroundButton(),
        },
        ...buttonSxProps,
      }}
      onClick={onClick}
    >
      {isLoading ? (
        <CustomProgress />
      ) : (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Typography
            fontFamily={"Segoe UI"}
            fontWeight={700}
            color={getColorText}
            textAlign={"center"}
            textTransform={"none"}
          >
            {title}
          </Typography>
          {isDownloadButton && (
            <UilImport
              style={{ marginLeft: 2 }}
              color={getColorDownloadButton()}
            />
          )}
        </Box>
      )}
    </Button>
  );
};

export default CustomButton;

export enum CustomButtonVariant {
  OUTLINED = "OUTLINED",
  OUTLINED_LOADING = "OUTLINED_LOADING",
  OUTLINED_DOWNLOAD = "OUTLINED_DOWNLOAD",
  OUTLINED_DOWNLOAD_LOADING = "OUTLINED_DOWNLOAD_LOADING",

  CONTAINED = "CONTAINED",
  CONTAINED_LOADING = "CONTAINED_LOADING",
  CONTAINED_DOWNLOAD = "CONTAINED_DOWNLOAD",
  CONTAINED_DOWNLOAD_LOADING = "CONTAINED_DOWNLOAD_LOADING",

  DISABLED = "DISABLED",
}
