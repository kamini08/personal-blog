
import Image from "next/image";

export default function BlogCard(params: any) {

    return(
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <Image height={400} width={400} className="rounded-t-lg" src={params.image? params.image : "/images/image-1.jpg"} alt="blog photo" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{params.title? params.title : "Blog Title"}</h5>
            </a>
            <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{params.content? params.content.substring(0, 50) : "Blog Content"}</p>
            <a href="#" className="text-white bg-cyan-400 hover:bg-cyan-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                Read more
                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
    
    );
}