import Link from "next/link";
import AnimeList from "./components/AnimeList";
import Header from "@/app/components/AnimeList/Header"
export default async function Home() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()
  const response1 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters?limit=8`)
  const topCharacter = await response1.json()

  return (
    <div>

      {/* Top Anime sect */}
      <section>
      <Header title="Top Anime" LinkHref="/populer" LinkTitle="Lihat Semua"/>
      <AnimeList api={topAnime}/>
      </section>
      <section>
      <Header title="Top Characters" />
      <AnimeList api={topCharacter}/>
      </section>
    </div>
  );
}

