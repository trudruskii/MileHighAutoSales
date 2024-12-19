import Image from 'next/image'
import logoplaceholder from "../../../public/logoplaceholder.png"
import ownerplaceholder from "../../../public/ownerplaceholder.png"
import Link from 'next/link'

export default function Navbarz() {
    return (
        <>
            <div className="bg-custom-bg bg-no-repeat bg-cover pt-80">
                <nav
                    className="bg-black border-b-2 border-l-2 border-r-2 rounded-b-lg border-red-900 p-4 shadow-xl flex fixed top-0 w-full z-20">
                    <div className="flex gap-8 text-white ml-64 justify-center items-center">
                        <button className="text-2xl hover:text-red-700">
                            Home
                        </button>
                        <button className="text-2xl hover:text-red-700">
                            Inventory
                        </button>
                        <button className="text-2xl hover:text-red-700">
                            Maintenance
                        </button>
                        <button className="text-2xl hover:text-red-700">
                            Reviews
                        </button>
                        <button className="text-2xl hover:text-red-700">
                            About Us
                        </button>
                        <div className="ml-28">
                            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round"
                                 stroke-miterlimit="2"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                 className="h-10 w-10 text-white items-end mt-4 ml-20">
                                <path
                                    d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
                                    fill="currentColor"/>
                            </svg>
                            <span>Search Inventory</span>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="bg-red-900 border border-black w-full h-36 flex justify-between">
                <Image src={logoplaceholder} alt="Logo placeholder image"
                       className="h-24 w-64 py-2  rounded-3xl"/>
                <div className="grid grid-rows-2">
                    <p className="mr-4 m-0">
                        2606 Bridge Blvd SW,<br/> Albuquerque, NM 87105
                    </p>
                    <p className="mr-4">
                        <Link href="tel:+15056392121" className="text-black hover:text-red-900">
                            505-639-2121
                        </Link>
                    </p>
                </div>
            </div>

        </>
    )
}


// <div className="grid grid-rows-3 justify-end mt-14 font-bold">
//
//     <div className="flex gap-4">
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//             <path
//                 d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
//         </svg>
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//             <path
//                 d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
//         </svg>
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//             <path
//                 d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z"/>
//         </svg>
//     </div>
// </div>