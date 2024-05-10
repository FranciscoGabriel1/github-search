import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

/*NOTE: This Skeleton is available in the Material UI documentation, under the Pulsate example section. You can find it here: https://mui.com/material-ui/react-skeleton/ */
const data = [
  {
    src: "",
    title: "",
    channel: "",
    views: "",
    createdAt: "",
  },
];

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 210, marginRight: 5, my: 5 }}>
          {item ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="text.secondary"
              >
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

export default function SkeletonCards() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
    </Box>
  );
}
