import Link from "next/link";
import AnimeList from "./components/AnimeList";

export default async function Home() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const anime = await response.json()
  anime.data

  return (
    <div>
      <div className="p-4 flex justify-between">
      <h1 className="text-xl font-bold text-white">Top Anime</h1>
      <Link href={"/populer"} className="text-xl underline text-white hover:text-yellow-600 transition-all">Lihat Semua</Link>
      </div>
      <div className="grid  md:grid-cols-4  grid-cols-2 gap-4 px-4">  
      {anime.data.map(data=>{
        return (
          <div key={data.mal_id} className="shadow-xl shadow-black ">
        <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
          </div>
        )
      })}
      </div>
    </div>
  );
}

