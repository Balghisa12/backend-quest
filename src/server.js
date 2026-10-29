import { readFileSync } from "node:fs";

const PORT = Number(process.env.PORT || 3000);
const PAGE = readFileSync(new URL("../public/index.html", import.meta.url), "utf8");
const COURSE_JSON = readFileSync(new URL("../data/course.json", import.meta.url), "utf8");

Bun.serve({
  hostname: "0.0.0.0",
  port: PORT,
  fetch(request) {
    const pathname = new URL(request.url).pathname;
    if (pathname === "/healthz") return new Response("ok", {headers: {"content-type": "text/plain"}});
    if (pathname === "/lessons") return new Response(COURSE_JSON, {headers: {"content-type": "application/json; charset=utf-8", "cache-control": "public,max-age=120", "x-content-type-options": "nosniff"}});
    if (pathname !== "/" && pathname !== "/index.html") return new Response("Not found", {status: 404});
    return new Response(PAGE, {headers: {"content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-content-type-options": "nosniff"}});
  }
});
