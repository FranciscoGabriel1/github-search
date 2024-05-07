import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IRepository } from "src/modules/models/IRepository";

const CardItem: React.FC<{ props: IRepository }> = ({ props }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography color="text.secondary">{props.full_name}</Typography>
        <Typography variant="body2">{props.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
