import { eventHandler, getRequestURL } from "vinxi/http";

export default eventHandler(async (event) => {
  console.log("Request received:", event);
  const url = getRequestURL(event);

  const { pathname } = new URL(url);

  if (pathname === "/api/hello") {
    return "Hello World!";
  }

  if (pathname === "/api/goodbye") {
    return "Goodbye World!";
  }

  return "API Endpoint Not Found";
});
