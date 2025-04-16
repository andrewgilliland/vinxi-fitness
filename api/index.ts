import { eventHandler } from "vinxi/http";

export default eventHandler(async (event) => {
  console.log("Request received:", event.node.req);

  const { pathname } = event.node.req;

  if (pathname === "/api/hello") {
    return "Hello World!";
  }

  if (pathname === "/api/goodbye") {
    return "Goodbye World!";
  }

  return "API Endpoint Not Found";
});
