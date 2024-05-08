import { Avatar, useMediaQuery } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

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
    </Avatar>
  );
};

export default CustomAvatar;
