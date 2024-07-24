"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react"
const inputSearch = () =>{

    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = () =>{
        event.preventDefault();
        router.push(`/search/${searchRef.current.value}`)
    }
    return (
        <form onSubmit={handleSearch}>
            <div className="flex items-center ">
            <input placeholder="Cari Anime..." className="rounded p-2 mr-3" ref={searchRef}/>
            <button onClick={handleSearch} type="button" className="  text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-black dark:hover:bg-slate-700 focus:outline-none ">Search</button>
            </div>
        </form>
        
    )
}

export default inputSearch