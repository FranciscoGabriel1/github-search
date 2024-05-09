/* The HttpClient interface specifies the methods that an HTTP client must implement. */
export interface HttpClient {
  /* Declares the get method with a generic type T. The method accepts a URL as a parameter and returns a Promise of type T. */
  get<T>(url: string): Promise<T>;
  /* Here, I could also add other methods according to the project's needs and growth. For example: Post, Patch, Put, Delete, SetAuthorization, etc. */
}
