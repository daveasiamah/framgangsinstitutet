import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  return await NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId:"REDACTED_GOOGLE_CLIENT_ID",
        clientSecret: "REDACTED_GOOGLE_CLIENT_SECRET"
      }),
      // FacebookProvider({
      //   clientId:"3565744143741409",
      //   clientSecret: "780bd3a1e691242c19c4060db39b98e2",
      // }),      
    ],
    secret: process.env.JWT_SECRET
  });
  
}

// providers:[
//     GoogleProvider({
//         clientId:"REDACTED_GOOGLE_CLIENT_ID",
//         clientSecret:"REDACTED_GOOGLE_CLIENT_SECRET"
//     })
// ]
