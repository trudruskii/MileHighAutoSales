import Image from 'next/image'
import logoplaceholder from "../../../public/images/logoplaceholder.png"
import mapplaceholder from "../../../public/images/mapplaceholder.jpg"
import Link from 'next/link'

export default function Navbarz() {
    return (
        <>
                <nav className="bg-black border-b-2 border-l-2 border-r-2 rounded-b-lg border-red-900 p-4 shadow-xl flex fixed top-0 w-full z-20 ">
                    <div className="flex justify-center items-center w-full p-4">
                        <div className="flex gap-8 text-white justify-center items-center">
                            <Link href="/" className="navLinks text-4xl hover:text-red-700">
                                Home
                            </Link>
                            <Link href="/" className="navLinks text-4xl hover:text-red-700">
                                Inventory
                            </Link>
                            <Link href="/" className="navLinks text-4xl hover:text-red-700">
                                Reviews
                            </Link>
                            <Link href="/" className="navLinks text-4xl hover:text-red-700">
                                About Us
                            </Link>
                            <div className="absolute right-4">
                                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                                     stroke-miterlimit="2"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                     className="h-10 w-10 text-white items-end mt-4 ml-20">
                                    <path
                                        d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
                                        fill="currentColor"/>
                                </svg>
                                <span className="searchinv text-xs">Search Inventory</span>
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )
}



