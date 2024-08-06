'use server';
import { supabase } from '@/lib/utils';
import { hash } from 'bcryptjs'
import { redirect } from 'next/navigation';
export const signup = async (formdata: FormData) => {

    const name = formdata.get('username') as string | undefined
    const email = formdata.get('email') as string | undefined
    const password = formdata.get('password') as string | undefined

    if (!name || !email || !password) throw new Error("Please fill all fields");
    if (email === "yash2@gmail.com") {
        throw new Error("Email already in use")
    }
    const hpass = await hash(password, 10);

    const { data, error } = await supabase.from('users').insert({username:name, email, password:hpass})
    if (error) {
        console.log('this is error222');
        console.log(error);
        
    } else {
        console.log('this is data222');
        console.log({ name, email, password, hpass });
        console.log(data);
    }
    redirect("/auth/login")
}