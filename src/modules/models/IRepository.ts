/* Defines the IRepository interface, which represents the data structure for a repository on GitHub. */
/* The request will return a lot of data, which can be seen by going to the "inspect > network" option in the browser. */
/* I chose to display only this data in the modal. */
/* This interface was created with the help of the tool https://transform.tools/json-to-typescript */
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
  created_at?: string;
  updated_at?: string;
  forks?: string;
}
