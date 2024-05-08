import React, { useState } from "react";
import { CardContent, CardHeader, Typography, useTheme } from "@mui/material";
import { IRepository } from "src/modules/models/IRepository";
import CustomModal from "@components/CustomModal";
import SimpleCard from "@components/SimpleCard";
import { UilBooks } from "@iconscout/react-unicons";
import CustomAvatar from "@components/CustomAvatar";

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
        <CardHeader
          avatar={
            <CustomAvatar
              name={props?.name || ""}
              photo={props.owner?.avatar_url}
            />
          }
          title={props?.owner?.login || ""}
          subheader={props.owner?.id}
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {props.description || "Nenhuma descrição disponível"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nome: {props.full_name || "Nome não especificado"}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            URL do avatar do proprietário:{" "}
            {props.owner?.avatar_url || "Não especificado"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            URL do repositório: {props.html_url || "URL não especificada"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Contagem de stargazers:{" "}
            {props.stargazers_count || "Contagem não especificada"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Contagem de watchers:{" "}
            {props.watchers_count || "Contagem não especificada"}
          </Typography>
        </CardContent>
      </CustomModal>
    </>
  );
};

export default CardItem;
