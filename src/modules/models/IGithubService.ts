import { IRepository } from "./IRepository";

/* IGithubService specifies the expected structure of the response from the GitHub API when searching for repositories. */
export interface IGithubService {
  items: IRepository[] /* Array of IRepository objects that contain information about each repository returned in the search. */;
}
