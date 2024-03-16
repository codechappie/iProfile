import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import dbConnect from '@/lib/connect-db.js';
import User from '@/models/User.js';
import { generateUsername } from '@/lib/utils';

interface authOptionsType {
    secret: string | undefined;
    providers: any;
    pages: {
        signIn: any;
    };
    callbacks: any;
    session: any;
}


export const authOptions: authOptionsType = {
    secret: process.env.SECRECT,
    providers: [
        GithubProvider({
            clientId: process.env.CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        })
    ],
    pages: {
        signIn: "/",
    },
    callbacks: {
        async signIn({ user, account, profile }: any) {
            // console.log(user, account, profile)
            if (account.provider === 'github' || account.provider === 'google') {
                await dbConnect();
                // check the user on your database and return true if is allowed to signIn
                let found = await User.findOne({
                    id: user.id,
                });
                console.log("FOUND", found)
                if (!found) {
                    // User.create()
                    try {
                        const username = generateUsername(user.name);

                        // axios.post("/api/user", {
                        //     id: user.id,
                        //     username,
                        //     name: user.name,
                        //     profileImage: "prueba",
                        //     bio: "prueba"
                        // }).then((data) => {
                        //     console.log("DATA: ", data)
                        // });

                        // TODO: removeprofile and bio as required
                        User.create({
                            id: user.id,
                            username,
                            name: user.name,
                            profileImage: "test",
                            bio: "test",
                        }).then((data: any) => data.id && true)
                            .then((error: any) => {
                                console.log("ERRORR: ", error)
                                return false;
                            })

                        // console.log(
                        //     data
                        // )
                        // const userprofile = await User.create({
                        //     id: user.id,
                        //     username,
                        //     name: user.name
                        // });
                    } catch (error) {
                        console.log("ERRROR CATCH: ", error)
                        return false;
                    }
                } else {

                    // const dispatch = useDispatch();

                    console.log("NAME: ", found.name)
                    // dispatch(setUserData(found.name))

                    return true
                };

                // const isAllowedToSignIn = user.id;

                // TODO: IF USER WAS FOUND IN DB RETURN TRUE ELSE REGISTER IN DB IN BOTH CASES RETURN TRUE
                // if (isAllowedToSignIn) {
                //     return true
                // }
                // console.log("INICIO SESSION")
                // return true;
            }
        },
        async jwt({ token, user, account, profile, isNewUser }: any) {
            if (account) {
                token.accessToken = account.access_token
                token.id = profile.id
            }
            
            return token
        },
        async session({ session, user, token }: any) {
            session.accessToken = token.accessToken
            session.user.id = token.id

            return session
        },
    },
    session: {
        // Set it as jwt instead of database
        strategy: "jwt",
    },
};