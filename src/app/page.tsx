
import connectToDatabase from "@/utils/dbConnect";
import Image from "next/image";
import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import Subscription from "./components/Subscription";
import { useEffect, useState } from "react";

/*
const getData = async () => {
  try {
    const client = await connectToDatabase();
    if (!client) {
      throw new Error("Failed to connect to the database.");
    }
  
    const db = await client.db("blogpost");
    console.log(db);
    const items = await db
      .collection("blog")
      .find({})
      .toArray();
    return items; 
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch Data!");
  }
};

*/

export default async function Home() {

  const blogs: any = [ {
    id: "101",
    title: "Blog Post 1",
    content: "This is the content of blog post 1",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00FxpyHsslrKah8AYyY01Gwu77MLbGglS-g&s",
    date: "2022-01-01",
  },
  {
    id: "102",
    title: "Blog Post 2",
    content: "This is the content of blog post 2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00FxpyHsslrKah8AYyY01Gwu77MLbGglS-g&s",
    date: "2022-01-01",
  },
  {
    id: "103",
    title: "Blog Post 1",
    content: "This is the content of blog post 3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00FxpyHsslrKah8AYyY01Gwu77MLbGglS-g&s",
    date: "2022-01-01",
  },
  ];

  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 text-center">
          <div className="inline-block rounded-full overflow-hidden">
            <Image
              src="/images/image-1.jpg"
              width={500}
      height={500}
              alt="Profile Picture"
              className="h-32 w-32 object-cover"
            />
          </div>
          <h2 className="text-2xl text-cyan-500 font-semibold mt-4">Ashley Portman</h2>
          <p className="text-gray-700 italic">
            Writer at The Daily Times spending all of my free time writing
            stories
          </p>
        </div>
        <div id="blogs" className="flex justify-center items-center">
          
          {
            blogs.map((blog: any) => {
              (<BlogCard {...blog}/>)
            }
            )
          }
        </div>
        
       
      </div>
      <Subscription />

    </main>
    </>
  );
}
