import CustomInput from "@components/CustomInput";
import ListResultSearch from "@components/ListResultSearch";
import { useGithubSearch } from "@context/SearchContext";
import React, { useState } from "react";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { Container, Typography, useTheme } from "@mui/material";
import CustomButton, { CustomButtonVariant } from "@components/CustomButton";

const Home: React.FC = () => {
  const [input, setInput] = useState("");
  const { searchRepositories, isLoading } = useGithubSearch();
  const theme = useTheme();

  const handleSearch = async () => {
    /*NOTE: Returns early if the input is empty to avoid unnecessary searches*/
    if (!input.trim()) return;
    /*NOTE: Perform the search with non-empty input*/
    await searchRepositories(input.trim());
  };

  return (
    <Container>
      <Typography
        fontWeight="bold"
        sx={{
          color: theme.palette.shadesOfDark.black,
          fontSize: { xs: 25, md: 32, sm: 25 },
        }}
      >
        <UilGithubAlt size={30} />
        GitHub Search
      </Typography>
      <CustomInput
        label="Pesquisar por"
        placeholder="Algo interessante no GitHub?"
        value={input}
        onChange={setInput}
        onSubmit={handleSearch}
      />

      <CustomButton
        onClick={handleSearch}
        type="submit"
        title="Pesquisar"
        sx={{ width: { xs: "100%", sm: "30%" }, mt: 2, mb: 2 }}
        variant={
          isLoading
            ? CustomButtonVariant.CONTAINED_LOADING
            : CustomButtonVariant.CONTAINED
        }
      />
      <ListResultSearch />
    </Container>
  );
};

export default Home;
