export default function Navbarz() {
    return (
        <>
            <nav className="bg-gray-700 items-center justify-end flex">
                <div className="flex justify-end">
                    <p className="mr-4">
                        2606 Bridge Blvd SW, Albuquerque, NM 87105
                    </p>
                    <p>
                        505-639-2121
                    </p>
                </div>
            </nav>
            <nav className="bg-black border-b-2 border-red-700">
                <div className="flex">
                    <button>
                        Home
                    </button>
                    <button>
                        Inventory
                    </button>
                    <button>
                        Holder1
                    </button>
                    <button>
                        Holder2
                    </button>
                    <button>
                        Fly high and say hi.
                    </button>
                </div>

            </nav>
        </>
    )
}
