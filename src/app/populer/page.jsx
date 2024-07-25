"use client";

import Header from "@/app/components/utilities/Header";
import Pagination from "@/app/components/utilities/Pagination";
import { useEffect, useState } from "react";
import AnimeList from "../components/AnimeList";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState({});

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    );
    const data = await response.json();
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);


  
  return (
    <div>
      <Header title={`Anime Terpopuler ke #${page}`} />
      <AnimeList api={topAnime} />
      {topAnime.pagination && (
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage = {setPage}
        />
      )}
    </div>
  );
};

export default Page;
