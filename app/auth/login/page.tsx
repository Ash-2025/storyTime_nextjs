"use server";
import * as React from "react"
import { RxArrowTopRight } from 'react-icons/rx'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { login } from "./action";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function page() {
    
    return (
        <main className="w-full h-screen flex bg-black items-center justify-center">
            <Card className="max-w-[350px] w-[350px] m-4">
                <CardHeader>
                    <CardTitle>LOGIN</CardTitle>
                    <CardDescription>LOGIN AND CONTINUE YOUR JOURNEY</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <form action={login} className="flex flex-col space-y-1.5">
                            <Input type="email" name="email" placeholder="Email" />
                            <Input type="password" name="password" placeholder="Password" />
                            <Button type="submit">
                                Login
                            </Button>
                        </form>
                    </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                    Dont't have an account ? <Link className="flex items-center gap-1 hover:font-bold hover:text-blue-500 transition-all duration-200" href={'/auth/signup'}>Sign Up <RxArrowTopRight /></Link>
                </CardFooter>
            </Card>
        </main>
    )
}

export default page