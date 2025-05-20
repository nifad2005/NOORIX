import clientPromise from "@/lib/Database/mongo";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const authOptions = {
    providers:[
        Google({
            clientId:process.env.GOOGLE_CLIENT_ID ,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    adapter:MongoDBAdapter(clientPromise),
    secret: process.env.AUTH_SECRET
} 


const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};