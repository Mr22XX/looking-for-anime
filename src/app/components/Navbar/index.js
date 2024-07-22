import Link from "next/link"

const Navbar = () =>{
    return (
        <header className="bg-yellow-500">
            <div className="flex md:flex-row flex-col justify-between p-4 items-center gap-2">
                <Link href="/" className="font-bold text-2xl text-black">Looking For Anime</Link>
                <input placeholder="Cari Anime..." className="rounded"/>
            </div>
        </header>
    )
}

export default Navbar