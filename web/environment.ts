export default function getEnv(env: "DEV" | "STAGE" | "PROD") {
  const SERVER_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL || process.env.NEXT_PUBLIC_SERVER_URL || "https://foodexpressapi.snepsej.space/";
  const WS_SERVER_URL = SERVER_URL.replace("http", "ws");

  switch (env) {
    case "DEV":
      return {
        SERVER_URL: SERVER_URL,
        WS_SERVER_URL: WS_SERVER_URL,
      };
    case "STAGE":
      return {
        SERVER_URL: SERVER_URL,
        WS_SERVER_URL: WS_SERVER_URL,
      };
    case "PROD":
      return {
        SERVER_URL: SERVER_URL,
        WS_SERVER_URL: WS_SERVER_URL,
      };
    default:
      return {
        SERVER_URL: SERVER_URL,
        WS_SERVER_URL: WS_SERVER_URL,
      };
  }
}
