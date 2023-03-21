import { Context } from "https://deno.land/x/oak/mod.ts";
import { verify } from "https://deno.land/x/djwt@v2.8/mod.ts";

// import { key } from "../config.ts";

const authMiddleware = async (ctx: Context, next: any) => {
  // console.log(ctx.request.headers, "aquiestamos")
  // const headers: Headers = ctx.request.headers;
  // const authorization = headers.get("Authorization");
  const authorization = true
  if (!authorization) {
    ctx.response.status = 401;
    ctx.response.body = { message: "Header : Authorization" };
    return;
  }
  const jwt = authorization;
  if (!jwt) {
    ctx.response.status = 401;
    ctx.response.body = { message: "JWT is necessary" };
    return;
  }
  // if (await verify(jwt, key, { isThrowing: false })) {
    else {
    await next();
    return;
  }

  ctx.response.status = 401;
  ctx.response.body = { message: "Invalid jwt token" };
};

export { authMiddleware };