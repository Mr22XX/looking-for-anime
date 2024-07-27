import { getAnimeResponse } from "@/app/libs/Api-lib"
import Image from "next/image"

const page = async ({params : {id}}) =>{
    const anime = await getAnimeResponse(`anime/${id}`)
    return(
        <div className="bg-slate-800 h-screen relative w-full">

            <div className="p-4">
                <h3 className="text-2xl text-white">{anime.data.title} - {anime.data.year}</h3>
            </div>
            
            <div className="overflow-x-scroll ">
            <div className="pt-4 px-4 flex   gap-2 text-white overflow-x-auto w-max">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-white p-2">
                    <h3>Rank</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-white p-2">
                    <h3>Duration</h3>
                    <p>{anime.data.duration}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-white p-2">
                    <h3>Rating</h3>
                    <p>{anime.data.rating}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-white p-2">
                    <h3>Popularity</h3>
                    <p>{anime.data.popularity}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-white p-2">
                    <h3>Members</h3>
                    <p>{anime.data.members}</p>
                </div>
            </div>
               
            </div>
            
            <div className="pt-4 px-4 flex  md:flex-row flex-col  gap-2 text-white">
            <Image 
            src={anime.data.images.webp.image_url}
            width={350}
            height={350}
            className="w-full rounded object-cover"
            alt={anime.data.images.webp.image_url}
            ></Image>
            <p className="text-justify text-xll">{anime.data.synopsis}</p>
            </div>

            <div className="video lg:absolute  flex justify-center relative p-5 bottom-2 right-2">
                <h3 className="p-2">Trailer </h3>
            <iframe width="350" height="315" src={anime.data.trailer.embed_url} title="YouTube video player" className="rounded-md" frameBorder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default page