import React from 'react'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'
const items = ["home", "explore", "search", "feed"]

function Sidebar() {
  return (
    <section className="fixed hidden md:w-[250px] lg:flex flex-col h-[calc(100vh-5rem)] space-y-4 items-stretch">
          <div className="w-full h-full flex flex-col space-y-4 mt-4 items-start text-white">
            <Link href={'/'} className="text-3xl mb-5 font-bold p-2">
              Logo
            </Link>
            {
              items.map((item) => (
                <Link className="hover:bg-white/10 hover:font-bold hover:text-blue-600 rounded-2xl transition-all duration-200 flex items-center justify-start w-fit space-x-2 p-2 text-2xl" href={`/${item}`} key={item}>
                  {item}
                </Link>
              ))
            }
            <Link href={"/post"} className="bg-blue-600 w-3/4 rounded-full p-4 text-2xl text-center hover:bg-opacity-70 transitiona-all duration-200 hover:font-bold">
              Post
            </Link>
          </div>
          <Link href={`/profile/5`} className="pb-4 flex items-center gap-3 space-x-2 justify-between m-1 p-4">
            <div className="flex items-center space-x-4">
              <div className="rounded-full h-10 w-10 bg-slate-500"></div>

              <div className="text-left">
                <Text color="whitesmoke">Club of Coders</Text>
                <Text color="whitesmoke" >@club</Text>
              </div>
            </div>
            <Text className="text-xl text-white">...</Text>
          </Link>
        </section>
  )
}

export default Sidebar