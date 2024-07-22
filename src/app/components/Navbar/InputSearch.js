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
            <div className="items-center">
            <input placeholder="Cari Anime..." className="rounded p-2 mr-3" ref={searchRef}/>
            <button onClick={handleSearch} type="button" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
        
    )
}

export default inputSearch