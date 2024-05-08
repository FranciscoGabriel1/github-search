import React, { useState } from "react";
import { CardContent, Typography, useTheme } from "@mui/material";
import { IRepository } from "src/modules/models/IRepository";
import CustomModal from "@components/CustomModal";
import SimpleCard from "@components/SimpleCard";
import { UilBooks } from "@iconscout/react-unicons";

const CardItem: React.FC<{ props: IRepository }> = ({ props }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <SimpleCard
        onClick={handleModal}
        height={150}
        sx={{ display: "flex", alignItems: "center", mt: 1.2 }}
      >
        <CardContent sx={{ textAlign: "center", width: "100%" }}>
          <UilBooks color="#6D7891" />
          <Typography
            gutterBottom
            fontSize={20}
            component="div"
            sx={{ color: theme.palette.shadesOfDark.black }}
          >
            {props.name}
          </Typography>
          <Typography
            fontSize={16}
            color="text.secondary"
            sx={{ color: "#626166" }}
          >
            {props.full_name}
          </Typography>
        </CardContent>
      </SimpleCard>
      <CustomModal
        title={
          <Typography variant="h6" component="h2">
            {props.name}
          </Typography>
        }
        open={open}
        onClose={handleModal}
        onClick={handleModal}
      >
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {props.description || "Nenhuma descrição disponível"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nome: {props.full_name}
          </Typography>
        </CardContent>
      </CustomModal>
    </>
  );
};

export default CardItem;
