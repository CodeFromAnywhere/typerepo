import type { RealApiReturnType } from "api-types";
import { UseQueryResult } from "react-query";
// import useStore from "../store";

export type UseDbMenuQueryResult = UseQueryResult<
  RealApiReturnType<"getDatabaseMenu">,
  unknown
>;

// export const useDbMenuQuery = (): UseDbMenuQueryResult => {
//   const [authToken, setAuthToken, { hydrated }] = useStore("api.authToken");
//   const result: UseDbMenuQueryResult = useQuery(
//     ["getDatabaseMenu", authToken],
//     () => getDatabaseMenu(),
//     { enabled: !!authToken && hydrated }
//   );

//   // If you have an auth token, but you are still unauthorized, logout!
//   if (
//     result.data?.isUnauthorized &&
//     hydrated &&
//     !!authToken &&
//     authToken.length > 0
//   ) {
//     console.log("Logged out due to incorrect auth!");
//     setAuthToken("");
//   }

//   return result;
// };
