import Post from "@/app/components/Post";
import AudioPlayer from "../components/AudioPlayer";

import React from 'react'

const Page = () => {
  return (
    <>
      <main className="lg:ml-[250px] ml-[50px] w-full lg:max-w-[600px] lg:w-[58%] mx-auto
     h-screen relative lg:mx-4 p-4 space-y-5 mb-4">
        <div className="w-full h-full">
          <Post
            title="Ayomori Horror"
            tags={["Horror", "mystery", "mystery", "mystery", "mystery", "mystery", "mystery", "mystery", "mystery"]}
            id="1"
            key={1}
          />
          <Post
            title="Ayomori Horror"
            tags={["Horror", "mystery"]}
            id="1"
            key={2}
          />
          <Post
            title="Ayomori Horror"
            tags={["Horror", "mystery"]}
            id="1"
            key={3}
          />
        </div>

        <div className="fixed right-0 left-0 bottom-0 bg-black h-20">
          <AudioPlayer />
        </div>

      </main>
    </>
  )
}

export default Page
