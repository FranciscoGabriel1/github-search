import { IRepository } from "@modules/models/IRepository";
import { GithubService } from "@modules/services/GithubService";
import React, { createContext, useContext, useState } from "react";

export interface ISearchContext {
  repositories: IRepository[];
  setRepositories: React.Dispatch<React.SetStateAction<IRepository[]>>;
  searchRepositories: (query: string) => Promise<void>;
}

const SearchContext = createContext<ISearchContext | undefined>(undefined);
const githubService = new GithubService();

const SearchContextProvider = ({ children }: React.PropsWithChildren) => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  const searchRepositories = async (query: string) => {
    const results = await githubService.searchRepositories(query);
    setRepositories(results);
  };

  return (
    <SearchContext.Provider
      value={{
        repositories,
        setRepositories,
        searchRepositories,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useGithubSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useGithubSearch deve ser usado dentro de um SearchContextProvider"
    );
  }
  return context;
};

export { SearchContextProvider, useGithubSearch };
