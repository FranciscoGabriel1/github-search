import React, { createContext, useCallback, useContext, useState } from "react";
import { IRepository } from "@modules/models/IRepository";
import { GithubService } from "@modules/services/GithubService";
import { AxiosHttpClient } from "@modules/ioc/HttpClient";

/* NOTE: Defines the structure of the search context, including states for repositories, loading, and search status. */
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

/* NOTE: Instantiating the necessary dependencies for the search service. */
const httpClient = new AxiosHttpClient();
const githubService = new GithubService(httpClient);

const SearchContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  /* NOTE: States to manage the list of repositories, loading state, and whether a search was made. */
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchMade, setSearchMade] = useState(false);

  /* NOTE: Function to search for repositories using GithubService. Updates states during the search process. */
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
    [setRepositories, setIsLoading, setSearchMade, githubService]
  );

  /* NOTE: Context provider that passes the states and search function to child components.*/
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

/* NOTE: Custom hook to access the search context, ensuring it's used within the appropriate provider.*/
const useGithubSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useGithubSearch deve ser usando dentro de um SearchContextProvider"
    );
  }
  return context;
};

export { SearchContextProvider, useGithubSearch };
