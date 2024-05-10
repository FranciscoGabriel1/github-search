import { Avatar, useMediaQuery } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { stringToColor } from "@utils/index";

interface CustomAvatarProps {
  photo?: string;
  name: string;
  width?: string | number;
  height?: string | number;
  sx?: SxProps<Theme>;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({
  photo,
  name,
  width,
  height,
  sx,
}) => {
  const isMobile = useMediaQuery("(max-width: 1300px)");

  const avatarSize = isMobile ? 38 : 50;

  const avatarStyle: SxProps<Theme> = {
    bgcolor: stringToColor(name),
    width: width ? width : avatarSize,
    height: height ? height : avatarSize,
    ...sx,
  };

  return (
    <Avatar src={photo} alt={name} sx={avatarStyle}>
      {photo
        ? ""
        : `${name.split(" ")[0][0]}${
            name.split(" ")[1] ? name.split(" ")[1][0] : ""
          }`}
      {/* This section is responsible for getting the initials of the name. For example, "Francisco Gabriel" gets "FG". */}
    </Avatar>
  );
};

export default CustomAvatar;
