import { IRepository } from "@modules/models/IRepository";
import { GithubService } from "@modules/services/GithubService";
import React, { createContext, useCallback, useContext, useState } from "react";

export interface ISearchContext {
  repositories: IRepository[];
  setRepositories: React.Dispatch<React.SetStateAction<IRepository[]>>;
  searchRepositories: (query: string) => Promise<void>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchMade: boolean;
  setSearchMade: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchContext = createContext<ISearchContext | undefined>(undefined);
const githubService = new GithubService();

const SearchContextProvider = ({ children }: React.PropsWithChildren) => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchMade, setSearchMade] = useState<boolean>(false);

  const searchRepositories = useCallback(
    async (query: string) => {
      setIsLoading(true);
      setSearchMade(true);
      try {
        const results = await githubService.searchRepositories(query);
        setRepositories(results);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [setRepositories, setIsLoading]
  );

  return (
    <SearchContext.Provider
      value={{
        repositories,
        setRepositories,
        searchRepositories,
        isLoading,
        setIsLoading,
        searchMade,
        setSearchMade,
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
