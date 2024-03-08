import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {
    // Secret for Next-auth, without this JWT encryption/decryption won't work
    secret: process.env.SECRECT,
    providers: [
        GithubProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/",
    },
    callbacks: {
        async signIn({ user, account, profile }): Promise<any> {
            console.log(user, account, profile)
            if (account.provider === 'github') {
                //   await dbConnect();
                //check the user on your database and return true if is allowed to signIn
                //   let found = await User.findOne({
                //     email: user.image.email,
                //   });
                const isAllowedToSignIn = user.id;

                // TODO: IF USER WAS FOUND IN DB RETURN TRUE ELSE REGISTER IN DB IN BOTH CASES RETURN TRUE
                if (isAllowedToSignIn) {
                    return true
                }
                console.log("INICIO SESSION")
                return true;
            }
        },

    },
};