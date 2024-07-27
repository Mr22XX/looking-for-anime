import Link from "next/link";
import AnimeList from "./components/AnimeList";
import Header from "@/app/components/AnimeList/Header"
import { getAnimeResponse } from "@/app/libs/Api-lib"
export default async function Home() {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const topAnime = await response.json()

  const topAnime = await getAnimeResponse("top/anime", "limit=8")


  return (
    <div>

      {/* Top Anime sect */}
      <section>
      <Header title="Top Anime" LinkHref="/populer" LinkTitle="Lihat Semua"/>
      <AnimeList api={topAnime}/>
      </section>
    </div>
  );
}
