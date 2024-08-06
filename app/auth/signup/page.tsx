'use server';
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
// import { useActionState } from "react"
import { signup } from "./action"

export default async function Page() {
    
    return (
        <main className="w-full h-screen flex bg-black items-center justify-center">
            <Card className="max-w-[350px] w-[350px]">
                <CardHeader>
                    <CardTitle color="black">SIGN UP</CardTitle>
                    <CardDescription color="black">JOIN US AND LISTEN TO AMAZING STORIES</CardDescription>
                </CardHeader>
                <CardContent>
                        <div className="grid w-full items-center gap-4">
                                <form action={signup} className="flex flex-col space-y-1.5 text-black">
                                    <Input type="text" name="username" placeholder="username" />
                                    <Input type="email" name="email" placeholder="Email" />
                                    <Input type="text" name="password" placeholder="Password" />
                                    <Button type="submit">
                                        Sign Up
                                    </Button>
                                </form>
                        </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                    Already have an account ? <Link className="flex items-center gap-1 hover:font-bold hover:text-blue-500 transition-all duration-200" href={'/auth/login'}>Login <RxArrowTopRight /></Link>
                </CardFooter>
            </Card>
        </main>
    )
}
