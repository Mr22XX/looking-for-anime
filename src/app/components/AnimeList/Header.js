import Link from "next/link"

const Header = ({title, LinkHref, LinkTitle, name}) =>{
    return (
             <div className="p-4 flex justify-between">
                {
                    title ? 
                    <h1 className="text-xl font-bold text-white">{title}</h1>
                    : name
                }
            {
                LinkHref && LinkTitle ?
                <Link href={LinkHref} className="text-xl underline text-white hover:text-yellow-600 transition-all">{LinkTitle}</Link>
                : null
            }
            </div>
    )
}

export default Header