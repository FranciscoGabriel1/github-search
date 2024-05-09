import { Box, Grid, Typography } from "@mui/material";
import React from "react";

interface ITitleAndSubtitle {
  title: string;
  subtitle?: string;
}

const TitleAndSubtitle: React.FC<ITitleAndSubtitle> = (props) => {
  return (
    <Grid item xl={12} display="flex" alignItems="center">
      <Box sx={{ display: "block", width: "100%", mt: 1, mb: 2 }}>
        <Typography
          sx={{ color: "#292841", fontSize: 15, fontWeight: "semibold" }}
        >
          {props.title}
        </Typography>
        <Typography sx={{ color: "#777777", fontFamily: 6, fontSize: 17 }}>
          {props.subtitle}
        </Typography>
      </Box>
    </Grid>
  );
};

export default TitleAndSubtitle;
