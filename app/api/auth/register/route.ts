import {NextResponse} from 'next/server'

export async function POST(req:Request){
    try {
        const {username,email,password} = await req.json();
        console.log({username,email,password});
        
    } catch (error:any) {
        console.log(error.message);
        
    }
}