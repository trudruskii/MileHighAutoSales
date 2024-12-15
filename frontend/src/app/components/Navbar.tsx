import Image from 'next/image'
import logoplaceholder from "../../../public/logoplaceholder.png"
import backgroundImage from "../../../public/locationplaceholder.png"
import Link from 'next/link'

export default function Navbarz() {
    return (
        <>
            <nav className="items-center grid grid-rows-2 bg-custom-bg bg-no-repeat bg-cover">
                <div className="flex justify-center">
                    <Image
                        src={logoplaceholder} alt="Logo placeholder image" className=" h-24 w-2/3 ml-4 mt-10 pt-4 rounded-3xl"
                    />
                </div>
                <div className="grid justify-end mt-14 font-bold">
                        <p className="mr-4 m-0">
                            2606 Bridge Blvd SW,<br/> Albuquerque, NM 87105
                        </p>
                        <p className=" mr-4">
                            <Link href="tel:+15056392121" className="text-blue-500 hover:text-blue-800">
                                505-639-2121
                            </Link>
                        </p>
                </div>
        </nav>
            {/*#d7c3ac*/}
    <nav className="bg-gradient-to-b from-[#d7c3ac] to-gray-600 border-b-2 border-l-2 border-r-2 rounded-b-lg border-red-900 p-4 shadow-xl">
        <div className="">
            <div className="flex gap-8 text-gray-300  flex justify-end">
                <button className="text-2xl hover:text-red-900">
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
                    Fly high and say hi.
                </button>
            </div>
        </div>

    </nav>
        </>
    )
}
