'use server'
import {redirect} from 'next/navigation'
import { compare } from 'bcryptjs'
import { CredentialsSignin } from 'next-auth'
import { auth, signIn } from '@/auth'

export const login = async (formdata:FormData) => {
    const email = formdata.get('email') as string | undefined
    const password = formdata.get('password') as string | undefined

    if(!email || !password) throw new Error("Please enter all fields")
    try {
        await signIn("credentials",{
            email,
            password,
            redirect:true,
            redirectTo:"/"
        })
    } catch (error) {
        const err = error as CredentialsSignin
        return err.message
    }
}