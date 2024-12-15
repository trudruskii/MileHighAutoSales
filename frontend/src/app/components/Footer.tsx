import Link from "next/link";

export default function Footer(){
    return(
        <>
            <footer className="bg-gray-300 py-4">
                <div className="container mx-auto text-left grid grid-cols-2">
                    <div className="text-sm text-start items-end justify-end text-black">Created by Spencer Tech Toolkit 2024</div>
                    <div className="font-semibold text-black hover:text-red-900 text-right text-sm"><Link href="/">Please read the<br/>Terms and Agreements</Link></div>
                </div>
            </footer>
        </>
    )
}