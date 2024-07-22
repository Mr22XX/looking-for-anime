import Link from "next/link"
import InputSearch from "./InputSearch"
const Navbar = () =>{
    return (
        <header className="bg-yellow-500">
            <div className="flex md:flex-row flex-col justify-between p-4 items-center gap-2">
                <Link href="/" className="font-bold text-2xl text-black">Looking For Anime</Link>
                <InputSearch/>
            </div>
        </header>
    )
}

export default Navbar