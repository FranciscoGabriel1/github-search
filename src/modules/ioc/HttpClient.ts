import axios from "axios";
import { HttpClient } from "./IHttpClient";

/* AxiosHttpClient class implements the HttpClient interface */
export class AxiosHttpClient implements HttpClient {
  /* Implements the generic get method, which accepts a URL as a parameter and returns a promise with a generic type T. */
  async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(
      url
    ); /* Uses axios to make a GET request and waits for the response. */
    return response.data; /* Returns the response data, extracted from the axios response object. */
  }
}
