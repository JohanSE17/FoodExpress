export default function getEnv(env: "DEV" | "STAGE" | "PROD") {
  switch (env) {
    case "DEV":
      return {
        SERVER_URL:
          "https://v1-api-foodexpress-multivendor-develop.up.railway.app/",
        WS_SERVER_URL:
          "wss://v1-api-foodexpress-multivendor-develop.up.railway.app/",
      };
    case "STAGE":
      return {
        SERVER_URL: "https://v1-api-foodexpress-multivendor-stage.up.railway.app/",
        WS_SERVER_URL: "wss://v1-api-foodexpress-multivendor-stage.up.railway.app/",
      };
    case "PROD":
      return {
        SERVER_URL: "https://api.foodexpress.com/",
        WS_SERVER_URL: "wss://api.foodexpress.com/",
      };
    default:
      return {
        SERVER_URL: "https://api.foodexpress.com/",
        WS_SERVER_URL: "wss://api.foodexpress.com/",
      };
  }
}
