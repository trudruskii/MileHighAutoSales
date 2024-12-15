import Link from "next/link";

export default function Footer(){
    return(
        <>
            <footer className="bg-gray-300 text-red-700 py-4">
                <div className="container mx-auto text-left flex">
                    <p>Created by Spencer Tech Toolkit 2024</p>
                    <span className="absolute right-8 font-semibold text-blue-500 hover:text-blue-700"><Link href="/">Terms and Agreements</Link></span>

                </div>
            </footer>
        </>
    )
}