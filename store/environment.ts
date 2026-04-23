/*****************************
 * environment.js
 * path: '/environment.js' (root of your project)
 * ******************************/

import * as Updates from "expo-updates";
import { useContext } from "react";
import { ConfigurationContext } from "./lib/context/global/configuration.context";

const getEnvVars = (env = Updates.channel) => {
  const configuration = useContext(ConfigurationContext);
  const GRAPHQL_URL = process.env.GRAPHQL_URL || "https://foodexpressapi.snepsej.space/graphql";
  const WS_GRAPHQL_URL = process.env.WS_GRAPHQL_URL || GRAPHQL_URL.replace("http", "ws");

  if (env === "production" || env === "staging") {
    return {
      GRAPHQL_URL,
      WS_GRAPHQL_URL,
      SENTRY_DSN: configuration?.restaurantAppSentryUrl,
      GOOGLE_MAPS_KEY: configuration?.googleApiKey,
    };
  }
  return {
    GRAPHQL_URL,
    WS_GRAPHQL_URL,
    SENTRY_DSN: configuration?.restaurantAppSentryUrl,
    GOOGLE_MAPS_KEY: configuration?.googleApiKey,
  };
};

export default getEnvVars;
