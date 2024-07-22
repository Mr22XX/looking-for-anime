import Image from "next/image"
import Link from "next/link"
const AnimeList = ({api}) =>{
    return (
        <div className="grid  md:grid-cols-4  grid-cols-2 gap-4 px-4 shsad">
            {api.data.map((data)=>{
            return (
                <div className="shadow-xl " key={data.mal_id}>

            <Link href={`/${data.mal_id}`} className="cursor-pointer">
                <Image src={data.images.webp.image_url} width={350} height={350} className="w-full max-h-96 object-cover" alt="gambar anime"/>
                {
                    data.title ?
                    <h3 className="font-bold md:text-xl text-md p-4 text-white">{data.title}</h3>
                    : 
                    <h3 className="font-bold md:text-xl text-md p-4 text-white">{data.name}</h3>
                }
            </Link>
                </div>
            )
            })}  
        </div>
    )
}

export default AnimeList 