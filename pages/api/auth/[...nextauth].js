import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
// import EmailProvider from "next-auth/providers/email";
// import AppleProvider from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";


export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        // AppleProvider({
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: process.env.APPLE_SECRET,
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID,
        //     client: process.env.FACEBOOK_SECRET,
        // }),
        // //Passwordless / email sign in 
        // EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: "NextAuth.js <no-reply@example.com"
        // }),
    ]
})