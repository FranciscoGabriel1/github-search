import { HttpClient } from "@modules/ioc/IHttpClient"; /* NOTE: HttpClient defines methods for making HTTP requests. */
import { IRepository } from "../models/IRepository";

import { API_URLS } from "@config/config";
import { IGithubService } from "@modules/models/IGithubService";

export class GithubService {
  /* NOTE: Defines the GithubService class, which encapsulates operations for searching repositories on GitHub. */
  private httpClient: HttpClient; /* NOTE: Private instance of HttpClient injected to make HTTP requests. */

  constructor(httpClient: HttpClient) {
    /* NOTE: Constructor that receives an instance of HttpClient. This allows dependency injection. */
    this.httpClient = httpClient;
  }

  public async searchRepositories(query: string): Promise<IRepository[]> {
    /* NOTE: Public method that searches for repositories on GitHub based on a query string. */
    const queryWithoutSpaces = query.replace(
      /\s+/g,
      ""
    ); /* NOTE: Removes spaces from the query to avoid errors in the URL. Spaces in the URL can cause the search to return no results, which is bad for user experience if it happens frequently. */
    const encodedQuery =
      encodeURIComponent(
        queryWithoutSpaces
      ); /* NOTE: Encodes the query to be URL-safe. */
    const url = `${API_URLS.GITHUB_REPOSITORIES}?q=${encodedQuery}+in:name`; /* NOTE: Constructs the complete URL for the request. */
    const response = await this.httpClient.get<IGithubService>(
      url
    ); /* NOTE: Makes the HTTP request and waits for the response. */
    return response.items; /* NOTE: Returns the result of the query. */
  }
}
