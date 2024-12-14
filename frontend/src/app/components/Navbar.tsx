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

    <nav className="bg-slate-900 border-b-2 border-l-2 border-r-2 rounded-b-lg border-red-900 p-4">
        <div className="flex gap-8 text-red-700 flex justify-center">
            <button className="text-3xl">
                Home
            </button>
            <button className="text-3xl">
                Inventory
            </button>
            <button className="text-3xl">
                Holder1
            </button>
            <button className="text-3xl">
                Holder2
            </button>
            <button className="text-3xl">
                Fly high and say hi.
            </button>
        </div>
    </nav>
        </>
    )
}
