import React, { useState } from "react";
import {
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { IRepository } from "src/modules/models/IRepository";
import CustomModal from "@components/CustomModal";
import SimpleCard from "@components/SimpleCard";
import CustomAvatar from "@components/CustomAvatar";
import {
  UilGithub,
  UilBooks,
  UilStarHalfAlt,
  UilEye,
  UilPlusCircle,
  UilClock,
  UilCodeBranch,
} from "@iconscout/react-unicons";
import { IconAndURL } from "@components/IconAndURL";
import TitleAndSubtitle from "@components/TitleAndSubtitle";
import { formatIsoDateToBrDateTime } from "@utils/index";

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
            fontSize={20}
            gutterBottom
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
          <TitleAndSubtitle
            title="Descrição do repositório"
            subtitle={props.description || "--"}
          />

          <TitleAndSubtitle
            title="Nome completo do repositório"
            subtitle={props.full_name || "--"}
          />

          <Grid xl={12} sm={12} display="flex" alignItems="center" mt={1}>
            <Grid xl={3} md={3} sm={12} xs={12}>
              <Typography
                fontSize={20}
                variant="body2"
                color="text.secondary"
                display="flex"
                alignItems="center"
              >
                <UilStarHalfAlt />
                {props.stargazers_count || "--"}
              </Typography>
            </Grid>
            <Grid xl={3} md={3} sm={12} xs={12}>
              <Typography
                fontSize={20}
                variant="body2"
                color="text.secondary"
                display="flex"
                alignItems="center"
              >
                <UilEye />
                {props.watchers_count || "--"}
              </Typography>
            </Grid>

            <Grid xl={3} md={3} sm={12} xs={12}>
              <Typography
                fontSize={20}
                variant="body2"
                color="text.secondary"
                display="flex"
                alignItems="center"
              >
                <UilCodeBranch />
                {props.forks || "--"}
              </Typography>
            </Grid>
          </Grid>

          <Grid>
            <Typography
              fontSize={17}
              variant="body2"
              color="text.secondary"
              display="flex"
              alignItems="center"
              mt={1}
            >
              <UilPlusCircle />
              {`Criado em ${formatIsoDateToBrDateTime(props.created_at)}` ||
                "--"}
            </Typography>
          </Grid>
          <Grid>
            <Typography
              fontSize={17}
              variant="body2"
              color="text.secondary"
              display="flex"
              alignItems="center"
              mt={1}
            >
              <UilClock />

              {`Atualizado em ${formatIsoDateToBrDateTime(props.updated_at)}` ||
                "--"}
            </Typography>
          </Grid>
          <IconAndURL icon={<UilGithub />} url={props.html_url || "#"} />
        </CardContent>
      </CustomModal>
    </>
  );
};

export default CardItem;
