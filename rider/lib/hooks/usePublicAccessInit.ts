import { useEffect } from "react";
import useEnvVars from "../../environment";
import { fetchPublicAccessToken } from "../utils/service/publicAccessService";

/**
 * Hook to initialize public access token on app startup
 */
export const usePublicAccessInit = () => {
  const { GRAPHQL_URL } = useEnvVars();

  useEffect(() => {
    const initPublicAccess = async () => {
      try {
        await fetchPublicAccessToken(
          GRAPHQL_URL || "https://foodexpressapi.snepsej.space/graphql"
        );
        console.log("Autenticación publica inicializada correctamente");
      } catch (error) {
        console.error("Fallo al inicializar el acceso publico:", error);
      }
    };

    initPublicAccess();
  }, [GRAPHQL_URL]);
};