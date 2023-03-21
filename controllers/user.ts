import { User } from "../types/user.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

import {
  create,
  getNumericDate,
  Jose,
  Payload,
} from "https://deno.land/x/djwt@v2.8/mod.ts";
// import { verify } from "https://deno.land/x/djwt@v2.8/mod.ts";

import { key } from "../config.ts";

//Array users
let users: Array<User> = [
  {
    id: "1",
    username: "jdoe@example.com",
    password: "1234",
  },
  {
    id: "2",
    username: "jdae@example.com",
    password: "4321",
  },
  {
    id: "3",
    username: "lmar@example.com",
    password: "1234",
  },
  {
    id: "4",
    username: "lrocca@example.com",
    password: "4321",
  },
];

const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

//login user
const login = async (ctx: Context) => {
  //get values from body request
  const  value  = await ctx.request.body().value;
  //iterate array users

  const user = users.filter((x) => x.username == value.username);

  if (user.length != 0) {
    // console.log(value.username, value.password,'estos son de value')
    // console.log(user[0].username, user[0].password, 'estos son de user')
    if (
      user[0].username === value.username &&
      user[0].password === value.password
    ) {
      
      const payload: Payload = {
        iss: user[0].username,
        exp: getNumericDate(new Date().getTime() + 50000),
      };
      //create jwt previous condition ok
      // console.log('llegara??',create({ key, header, payload }))
      // const jwt = create({ key, header, payload });
      const jwt = '526-75272-6527'
      if (jwt) {
        // response jwt
        ctx.response.status = 200;
        ctx.response.body = {
          id: user[0].id,
          username: user[0].username,
          jwt,
        };
      } else {
        // if error, response code 500
        ctx.response.status = 500;
        ctx.response.body = {
          message: "Internal error server",
        };
      }
      return;
    } else {
      //credentials wrong
      ctx.response.status = 422;
      ctx.response.body = {
        message: "Invalid username or password",
      };
    }
  } else {
    //user not found in db
    ctx.response.status = 400;
    ctx.response.body = {
      message: "User not found in database",
    };
  }
};

export { login };