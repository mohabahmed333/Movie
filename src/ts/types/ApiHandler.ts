export type ApiHandler<T> = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: T;
  headers?: Record<string, string>;
  isToken?: boolean;
  params?: Record<string, string|number|Object>;
  baseURL?: string;
};
