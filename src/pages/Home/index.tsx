import CustomInput from "@components/CustomInput";
import ListResultSearch from "@components/ListResultSearch";
import { useGithubSearch } from "@context/SearchContext";
import React, { useState } from "react";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { Grid, Typography, useTheme } from "@mui/material";
import CustomButton, { CustomButtonVariant } from "@components/CustomButton";

const Home: React.FC = () => {
  const [input, setInput] = useState("");
  const { searchRepositories, isLoading } = useGithubSearch();
  const theme = useTheme();

  const handleSearch = async () => {
    await searchRepositories(input);
  };

  return (
    <Grid>
      <Typography
        fontWeight="bold"
        sx={{ color: theme.palette.shadesOfDark.black, fontSize: 30 }}
      >
        <UilGithubAlt size={30} />
        GitHub Search
      </Typography>
      <CustomInput
        label="Pesquisar repositório"
        value={input}
        onChange={setInput}
      />

      <CustomButton
        onClick={handleSearch}
        type="submit"
        title="Pesquisar"
        sx={{ width: "30%", mt: 2, mb: 2 }}
        variant={
          isLoading
            ? CustomButtonVariant.CONTAINED_LOADING
            : CustomButtonVariant.CONTAINED
        }
      />
      <ListResultSearch />
    </Grid>
  );
};

export default Home;
