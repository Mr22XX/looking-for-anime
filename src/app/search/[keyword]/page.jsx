import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header"
import { getAnimeResponse } from "@/app/libs/Api-lib";
export default async function Page({params}) {
  const {keyword} = params
  const decodedKeyword = decodeURI(keyword)
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
  // const searchAnime = await response.json()

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

  return (
    <div>
      {/* Top Anime sect */}
      <section>
      <Header title={`Pencarian untuk ${decodedKeyword}`} />
      <AnimeList api={searchAnime}/>
      </section>
    </div>
  );
}

