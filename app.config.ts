import { createApp } from "vinxi";

export default createApp({
  routers: [
    {
      name: "api",
      type: "http",
      base: "/api",
      handler: "./api/index.ts",
    },
  ],
});
