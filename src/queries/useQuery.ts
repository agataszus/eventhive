import {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  useQuery as useReactQuery,
} from "react-query";
import { RequestError } from "../services/api/client";
import { useTokenExpiredCheck } from "../hooks/useLogoutOnTokenExpired";

export const useQuery = <
  TQueryFnData = unknown,
  TError extends RequestError = RequestError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryKey" | "queryFn"
  >
) => {
  const query = useReactQuery<TQueryFnData, TError, TData, TQueryKey>(
    queryKey,
    queryFn,
    options
  );

  useTokenExpiredCheck(query.error);

  return query;
};
