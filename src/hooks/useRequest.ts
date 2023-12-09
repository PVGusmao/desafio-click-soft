import { useQuery } from "react-query";
import api from "../services/api";

interface IResponse {
  data: any;
  isLoading: boolean;
  isError: boolean;
  error: any;
}

/**
 * Generates a function comment for the given function body.
 *
 * @param {string} name - The name of the request.
 * @param {string} url - The URL for the request.
 * @return {IResponse} The response object containing the data, loading state, error state, and error message.
 */
export function useRequest(name: string, url: string): IResponse {
  const {data, isLoading, isError, error} = useQuery(name, async () => {
    const res = await api.get(url);
    return res.data;
  });

  return {data, isLoading, isError, error}
}