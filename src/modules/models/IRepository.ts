export interface IRepository {
  id?: number;
  name?: string;
  full_name?: string;
  description?: string;
  owner?: {
    login?: string;
    id?: number;
    avatar_url?: string;
  };
  html_url?: string;
  stargazers_count?: number;
  watchers_count?: number;
}
