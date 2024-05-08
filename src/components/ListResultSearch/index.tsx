import React from "react";
import { useGithubSearch } from "@context/SearchContext";

import Grid from "@mui/material/Grid";
import CardItem from "@components/CardItem";
import SkeletonCards from "@components/Skeleton";

const ListResultSearch: React.FC = () => {
  const { repositories, isLoading, searchMade } = useGithubSearch();

  return (
    <Grid container spacing={2}>
      {isLoading && <SkeletonCards />}
      {!isLoading &&
        repositories.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <CardItem props={item} />
          </Grid>
        ))}
      {repositories.length === 0 && !isLoading && searchMade && (
        <Grid item xs={12}>
          Não há repositórios encontrados para essa pesquisa.
        </Grid>
      )}
    </Grid>
  );
};

export default ListResultSearch;
