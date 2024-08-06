import NextAuth, { CredentialsSignin, Session, User } from "next-auth"
import {JWT} from 'next-auth/jwt'
import CredentialsProvider from "next-auth/providers/credentials"
import { supabase } from "./lib/utils"
import {compare} from 'bcryptjs'

// types for callbacks
interface AppUser{
  id:string,
  email: string;
  name: string;
}

interface AppToken extends JWT {
  user?: AppUser;
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email"
        },
        password: {
          label: "password",
          type: "password"
        }
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined
        const password = credentials.password as string | undefined

        // if (password !== "passcode") throw new CredentialsSignin("Invalid password")
        // if (!email || typeof email !== "string") throw new CredentialsSignin("Invalid email")
        const id = "kflsls"

        const {data,error} = await supabase.from('users').select('uuid,email,username,password').eq('email',email).single();
        if(error){
          console.log('\nThis is login error\n');
          console.log(error);
        } else {
          console.log('This is login success');
          console.log(data);
        }
        
        const user = data;
        return {id:user?.uuid, email:user?.email, name:user?.username} as AppUser
        // const isMatch = await compare(password,user?.password)
      
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }: { token: AppToken; user?: AppUser }) {
      if (user) {
        // Adding custom user properties to the token
        token.user = {
          id: user.id,
          email: user.email,
          name: user.name
        };
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: AppToken }) {
      if (token.user) {
        session.user = {
          ...session.user, // Spread existing session user properties
          id: token.user.id,
          email: token.user.email,
          name: token.user.name
        };
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/login"
  }
})