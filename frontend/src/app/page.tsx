import Image from "next/image";
import carplaceholder1 from "../../public/images/car1.jpg";
import carplaceholder2 from "../../public/images/car2.jpg";
import carplaceholder3 from "../../public/images/car3.jpg";
import carplaceholder4 from "../../public/images/car4.jpg";

export default function Home() {
    return (
        <>
            <div className="border-black bg-gray-200 border-l-[3px] border-r-[3px]">
                <div className="flex flex-col gap-4 border-t border-red-900 pt-12 pl-24">
                    <div className="flex flex-row items-center justify-start gap-2">
                        <label htmlFor="search-query">
                            Search our inventory here:
                        </label>
                        <input type="text" placeholder="Make, Model, Year..."
                               className="border border-gray-400 rounded-xl p-1.5"/>
                    </div>
                    <p className="text-lg text-center mr-[28rem]">Results: Whatever result of the sort prints here.</p>
                </div>

                <div className="text-black text-center border-b-2 border-red-900 p-4 w-screen justify-start relative">
                    <div className="grid grid-cols-5 justify-start items-start ml-10">
                        <div className="cols-span-1 bg-white border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] mt-8 w-80 pb-2">
                            <Image src={carplaceholder3} alt="Car placeholder image"
                                   className="h-64 w-80 rounded-t-3xl rounded-b-none"/>
                            <span className="p-2 text-blue-700 font-semibold">2025 Chevrolet Corvette</span>
                            <div className="h-[.1rem] bg-red-900 m-2"></div>
                            <div className="ml-2 text-start text-sm">
                                <span className="font-bold">Miles:</span> <span>20,367</span>
                            </div>
                            <span className="flex justify-end text-black pr-4 font-semibold text-sm gap-2 items-center">Price:<span
                                className="font-bold text-lg">$89,000</span></span>
                        </div>

                        <div
                            className="bg-white cols-span-1 border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] mt-8 w-80">
                            <Image src={carplaceholder4} alt="Car placeholder image"
                                   className="h-64 w-80 rounded-t-3xl rounded-b-none"/>
                            <span className="p-2 text-blue-700 font-semibold">2025 Chevrolet Corvette</span>
                            <div className="h-[.1rem] bg-red-900 m-2"></div>
                            <div className="ml-2 text-start text-sm">
                                <span className="font-bold">Miles:</span> <span>20,367</span>
                            </div>
                            <span className="flex justify-end text-black pr-4 font-semibold text-sm gap-2 items-center">Price:<span
                                className="font-bold text-lg">$89,000</span></span>
                        </div>
                        <div
                            className="bg-white col-span-1 border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] w-80 mt-8">
                            <Image src={carplaceholder1} alt="Car placeholder image"
                                   className="h-64 w-80 rounded-t-3xl rounded-b-none"/>
                            <span className="p-2 text-blue-700 font-semibold">2025 Chevrolet Corvette</span>
                            <div className="h-[.1rem] bg-red-900 m-2"></div>
                            <div className="ml-2 text-start text-sm">
                                <span className="font-bold">Miles:</span> <span>20,367</span>
                            </div>
                            <span className="flex justify-end text-black pr-4 font-semibold text-sm gap-2 items-center">Price:<span
                                className="font-bold text-lg">$89,000</span></span>
                        </div>

                        <div className="bg-white col-span-1 border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] w-80 mt-8">
                            <Image src={carplaceholder2} alt="Car placeholder image"
                                   className="h-64 w-80 rounded-t-3xl rounded-b-none"/>
                            <span className="p-2 text-blue-700 font-semibold">2025 Chevrolet Corvette</span>
                            <div className="h-[.1rem] bg-red-900 m-2"></div>
                            <div className="ml-2 text-start text-sm">
                                <span className="font-bold">Miles:</span> <span>20,367</span>
                            </div>
                            <span className="flex justify-end text-black pr-4 font-semibold text-sm gap-2 items-center">Price:<span
                                className="font-bold text-lg">$89,000</span></span>
                        </div>

                        <div className="-mt-24 border-[1px] bg-white border-gray-200 w-[22rem] h-[26rem] rounded-lg shadow-lg p-4 text-black text-start">
                            <p className="font-light text-sm">
                                Car ipsum dolor sit amet steering wheel. Buggy limousine pickup truck gas powered
                                dragster
                                trunk. Coupe supercar fuel engine fuel gauge spider gasoline. Drive luxury car race car
                                lane
                                expressway microcar. Navigation stock car cross-over vehicle station wagon suspension
                                street.
                                Taxi automobile tailgate windshield suspension sunroof windscreen gear. Auto torque
                                radio
                                solar powered electric engine roadster pickup truck wing mirror solar powered. Minivan
                                hatchback roadster hatchback blinker gas-electric bus seat belt brake light.
                            </p>
                        </div>

                        <div className="col-span-1 bg-white text-black border border-gray-200 rounded-lg shadow-lg mt-12 w-[22rem] h-[19rem] p-4 -ml-6 flex flex-col justify-between">
                            <h2 className="text-lg font-semibold">Reviews</h2>
                            <div className="flex-1 space-y-2">
                                <div className="animate-pulse flex flex-col">
                                    <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
                                    <div className="bg-gray-300 h-3 w-1/2 rounded mt-2"></div>
                                </div>
                                <div className="animate-pulse flex flex-col">
                                    <div className="bg-gray-300 h-4 w-2/3 rounded"></div>
                                    <div className="bg-gray-300 h-3 w-1/3 rounded mt-2"></div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">Fetching reviews...</p>
                        </div>
                        <div className="cols-span-1 bg-white border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] mt-8 w-80">
                            <Image src={carplaceholder3} alt="Car placeholder image"
                                   className="h-64 w-80 rounded-t-3xl rounded-b-none"/>
                            <span className="p-2 text-blue-700 font-semibold">2025 Chevrolet Corvette</span>
                            <div className="h-[.1rem] bg-red-900 m-2"></div>
                            <div className="ml-2 text-start text-sm">
                                <span className="font-bold">Miles:</span> <span>20,367</span>
                            </div>
                            <span className="flex justify-end text-black pr-4 font-semibold text-sm gap-2 items-center">Price:<span
                                className="font-bold text-lg">$89,000</span></span>
                        </div>

                        <div className="bg-white cols-span-1 border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] mt-8 w-80">
                            <Image src={carplaceholder4} alt="Car placeholder image"
                                   className="h-64 w-80 rounded-t-3xl rounded-b-none"/>
                            <span className="p-2 text-blue-700 font-semibold">2025 Chevrolet Corvette</span>
                            <div className="h-[.1rem] bg-red-900 m-2"></div>
                            <div className="ml-2 text-start text-sm">
                                <span className="font-bold">Miles:</span> <span>20,367</span>
                            </div>
                            <span className="flex justify-end text-black pr-4 font-semibold text-sm gap-2 items-center">Price:<span
                                className="font-bold text-lg">$89,000</span></span>
                        </div>
                        <div className="bg-white col-span-1 border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] w-80 mt-8">
                            <Image src={carplaceholder1} alt="Car placeholder image"
                                   className="h-64 w-80 rounded-t-3xl rounded-b-none"/>
                            <span className="p-2 text-blue-700 font-semibold">2025 Chevrolet Corvette</span>
                            <div className="h-[.1rem] bg-red-900 m-2"></div>
                            <div className="ml-2 text-start text-sm">
                                <span className="font-bold">Miles:</span> <span>20,367</span>
                            </div>
                            <span className="flex justify-end text-black pr-4 font-semibold text-sm gap-2 items-center">Price:<span
                                className="font-bold text-lg">$89,000</span></span>
                        </div>

                        <div className="bg-white col-span-1 border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] w-80 mt-8">
                            <Image src={carplaceholder2} alt="Car placeholder image"
                                   className="h-64 w-80 rounded-t-3xl rounded-b-none"/>
                            <span className="p-2 text-blue-700 font-semibold">2025 Chevrolet Corvette</span>
                            <div className="h-[.1rem] bg-red-900 m-2"></div>
                            <div className="ml-2 text-start text-sm">
                                <span className="font-bold">Miles:</span> <span>20,367</span>
                            </div>
                            <span className="flex justify-end text-black pr-4 font-semibold text-sm gap-2 items-center">Price:<span
                                className="font-bold text-lg">$89,000</span></span>
                        </div>

                        <div className="cols-span-1 bg-white border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] mt-8 w-80">
                            <Image src={carplaceholder3} alt="Car placeholder image"
                                   className="h-64 w-80 rounded-t-3xl rounded-b-none"/>
                            <span className="p-2 text-blue-700 font-semibold">2025 Chevrolet Corvette</span>
                            <div className="h-[.1rem] bg-red-900 m-2"></div>
                            <div className="ml-2 text-start text-sm">
                                <span className="font-bold">Miles:</span> <span>20,367</span>
                            </div>
                            <span className="flex justify-end text-black pr-4 font-semibold text-sm gap-2 items-center">Price:<span
                                className="font-bold text-lg">$89,000</span></span>
                        </div>

                        <div className="bg-white cols-span-1 border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] mt-8 w-80">
                            <Image src={carplaceholder4} alt="Car placeholder image"
                                   className="h-64 w-80 rounded-t-3xl rounded-b-none"/>
                            <span className="p-2 text-blue-700 font-semibold">2025 Chevrolet Corvette</span>
                            <div className="h-[.1rem] bg-red-900 m-2"></div>
                            <div className="ml-2 text-start text-sm">
                                <span className="font-bold">Miles:</span> <span>20,367</span>
                            </div>
                            <span className="flex justify-end text-black pr-4 font-semibold text-sm gap-2 items-center">Price:<span
                                className="font-bold text-lg">$89,000</span></span>
                        </div>
                        <div className="bg-white col-span-1 border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] w-80 mt-8">
                            <Image src={carplaceholder1} alt="Car placeholder image" className="h-64 w-80 rounded-t-3xl rounded-b-none"/>
                            <span className="p-2 text-blue-700 font-semibold">2025 Chevrolet Corvette</span>
                            <div className="h-[.1rem] bg-red-900 m-2"></div>
                            <div className="ml-2 text-start text-sm">
                                <span className="font-bold">Miles:</span> <span>20,367</span>
                            </div>
                            <span className="flex justify-end text-black pr-4 font-semibold text-sm gap-2 items-center">Price:<span
                                className="font-bold text-lg">$89,000</span></span>
                        </div>

                        <div className="bg-white col-span-1 border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] w-80 mt-8">
                            <Image src={carplaceholder2} alt="Car placeholder image" className="h-64 w-80 rounded-t-3xl rounded-b-none"/>
                            <span className="p-2 text-blue-700 font-semibold">2025 Chevrolet Corvette</span>
                            <div className="h-[.1rem] bg-red-900 m-2"></div>
                            <div className="ml-2 text-start text-sm">
                                <span className="font-bold">Miles:</span> <span>20,367</span>
                            </div>
                            <span className="flex justify-end text-black pr-4 font-semibold text-sm gap-2 items-center">Price:<span
                                className="font-bold text-lg">$89,000</span></span>
                        </div>
                        <div className="cols-span-1 bg-white border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] mt-8 w-80">
                            <Image src={carplaceholder3} alt="Car placeholder image" className="h-64 w-80 rounded-t-3xl rounded-b-none"/>
                            <span className="p-2 text-blue-700 font-semibold">2025 Chevrolet Corvette</span>
                            <div className="h-[.1rem] bg-red-900 m-2"></div>
                            <div className="ml-2 text-start text-sm">
                                <span className="font-bold">Miles:</span> <span>20,367</span>
                            </div>
                            <span className="flex justify-end text-black pr-4 font-semibold text-sm gap-2 items-center">Price:<span
                                className="font-bold text-lg">$89,000</span></span>
                        </div>
                    </div>
                    <div className="p-20"></div>
                </div>
            </div>
        </>
    );
}


