'use server';
import { auth } from "@/auth";

export default async function Home() {
  const p = {
    title:"Ayomori horror",
    id:"123",
    tags:["horror","mystery"]
  }
  const session = await auth();
  console.log(session?.user);
  return (
    <main className="w-full h-screen flex items-center justify-center bg-black">
      <h1 className="text-white">
        Home Page
      </h1>
      <p>
        {
          session?.user?.id
        }
        {session?.user?.email}
        {session?.user?.name}
      </p>
    </main>
  );
}
