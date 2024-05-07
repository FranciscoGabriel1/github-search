import axios from "axios";
import { IRepository } from "../models/IRepository";
import { API_URLS } from "@config/config";

export class GithubService {
  public async searchRepositories(query: string): Promise<IRepository[]> {
    const response = await axios.get(
      `${API_URLS.GITHUB_REPOSITORIES}?q=${query}+in:name`
    );
    return response.data.items as IRepository[];
  }
}
