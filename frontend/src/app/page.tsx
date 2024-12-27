import Image from "next/image";
import carplaceholder1 from "../../public/images/car1.jpg";
import carplaceholder2 from "../../public/images/car2.jpg";
import carplaceholder3 from "../../public/images/car3.jpg";
import carplaceholder4 from "../../public/images/car4.jpg";
import mapplaceholder from "../../public/images/mapplaceholder.jpg";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="bg-custom-bg bg-no-repeat bg-cover border-black border-r-[3px] border-l-[3px] pt-[32.5rem] -mt-7">
            </div>
            <div className="bg-black border-t-gray-400 border-b-gray-400 border-l-red-900 border-r-red-900 border-t-[1px] border-b-[1px] border-l-[3px] border-r-[3px] w-full h-36 flex justify-between items-center">
                <h1 className="text-white text-[8rem] ml-[20rem]">
                    Mile High Auto Sales
                </h1>
                {/*animate-pulseText*/}
                <div className="flex flex-row gap-10">
                    <Image src={mapplaceholder} alt="Map placeholder image" className="h-28 w-32 my-auto"/>
                    <div className="relative flex flex-col my-auto justify-center items-center text-gray-400">
                        <p className="mr-12 mt-4">
                            <Link
                                href="https://www.google.com/maps/place/2606+Bridge+Blvd+SW,+Albuquerque,+NM+87105/@35.0667321,-106.6981683,17z/data=!3m1!4b1!4m6!3m5!1s0x87220d138d6bef69:0xe0e80640b3dc0750!8m2!3d35.0667277!4d-106.695588!16s%2Fg%2F11cp9l52rt?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                                className=" hover:text-white">2606 Bridge Blvd SW,<br/> Albuquerque, NM 87105</Link>
                            <br/><Link href="tel:+15056392121" className=" hover:text-white">
                            505-639-2121
                        </Link>
                        </p>
                        <span className="flex flex-row gap-1 mr-[88px] py-2">
                        <Link href="https://www.youtube.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0
                            24 24" width="24" height="24">
                                <path fill="#FF3D00"
                                      d="M21.6,16.95c-0.2,1.05-1.05,1.85-2.1,2c-1.65,0.25-4.4,0.55-7.5,0.55c-3.05,0-5.8-0.3-7.5-0.55c-1.05-0.15-1.9-0.95-2.1-2C2.2,15.8,2,14.1,2,12c0-2.1,0.2-3.8,0.4-4.95c0.2-1.05,1.05-1.85,2.1-2C6.15,4.8,8.9,4.5,12,4.5c3.1,0,5.8,0.3,7.5,0.55c1.05,0.15,1.9,0.95,2.1,2c0.2,1.15,0.45,2.85,0.45,4.95C22,14.1,21.8,15.8,21.6,16.95z">
                                </path>
                                <path fill="#FFF" d="M10 15.5V8.5L16 12z"></path>
                            </svg>
                        </Link>
                        <Link href="https://x.com/?lang=en">
                            <svg className="text-white bg-black"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-linecap="round"
                                 stroke-linejoin="round" width="24" height="24"
                                 stroke-width="2">
                                <path d="M4 4l11.733 16h4.267l-11.733
                                -16z"></path>
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772
                                -6.772"></path>
                            </svg>
                        </Link>
                        <Link href="https://www.facebook.com/">
                            <svg className="text-[#0866ff]" xmlns="http://ww
                            .w3.org/2000/svg" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 stroke-linecap="round" stroke-linejoin="round"
                                 width="24" height="24" stroke-width="2">
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1
                                    -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                            </svg>
                        </Link>
                        <Link
                            href="https://www.tiktok.com/explore?kuid=31b6d78a-c086-437f-9ab0-df56eaf7fd8b&kref=vGWRdzLJnjYf">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0
                            24 24" width="24" height="24"><path fill="#212121" fill-rule="evenodd"
                                                                d="M5.452,3h13.096C20.902,3,22,4.098,22,5.452v13.096C22,20.902,20.902,22,18.548,22H5.452C4.098,22,3,20.902,3,18.548V5.452C3,4.098,4.098,3,5.452,3z"
                                                                clip-rule="evenodd"></path><path fill="#ec407a"
                                                                                                 fill-rule="evenodd"
                                                                                                 d="M14.604,10.303c0.788,0.563,1.753,0.894,2.796,0.894v-2.006c-0.198,0-0.394-0.021-0.587-0.061v1.578c-1.042,0-2.007-0.331-2.796-0.894v4.092c0,2.047-1.66,3.706-3.709,3.706c-0.764,0-1.475-0.231-2.064-0.627c0.673,0.688,1.613,1.115,2.652,1.115c2.048,0,3.709-1.66,3.709-3.706L14.604,10.303L14.604,10.303z M15.328,8.281c-0.402-0.44-0.667-1.008-0.724-1.637v-0.258h-0.557C14.188,7.184,14.666,7.867,15.328,8.281L15.328,8.281z M9.54,15.416c-0.225-0.295-0.347-0.656-0.346-1.026c0-0.936,0.759-1.696,1.696-1.696c0.174,0,0.348,0.027,0.515,0.08v-2.05c-0.195-0.027-0.39-0.038-0.587-0.034v1.595c-0.167-0.053-0.34-0.08-0.515-0.08c-0.937,0-1.696,0.759-1.696,1.696C8.606,14.563,8.986,15.137,9.54,15.416z"
                                                                                                 clip-rule="evenodd"></path><path
                                fill="#fff" fill-rule="evenodd"
                                d="M14.017,9.815c0.788,0.563,1.753,0.894,2.796,0.894v-1.578c-0.582-0.124-1.097-0.428-1.484-0.851c-0.663-0.414-1.141-1.096-1.281-1.894h-1.462v8.009c-0.004,0.933-0.761,1.69-1.696,1.69c-0.551,0-1.04-0.262-1.35-0.669c-0.553-0.279-0.933-0.853-0.933-1.515c0-0.936,0.759-1.696,1.696-1.696c0.18,0,0.353,0.028,0.515,0.08V10.69c-2.012,0.041-3.63,1.685-3.63,3.705c0,1.009,0.403,1.924,1.057,2.592c0.59,0.396,1.3,0.627,2.064,0.627c2.048,0,3.709-1.66,3.709-3.706L14.017,9.815L14.017,9.815z"
                                clip-rule="evenodd"></path><path fill="#81d4fa" fill-rule="evenodd"
                                                                 d="M16.813,9.131v-0.427c-0.525,0.001-1.039-0.146-1.484-0.424C15.722,8.712,16.242,9.009,16.813,9.131z M14.048,6.386c-0.014-0.076-0.024-0.153-0.031-0.23v-0.258h-2.018v8.01c-0.003,0.933-0.761,1.69-1.696,1.69c-0.275,0-0.533-0.065-0.763-0.181c0.31,0.407,0.8,0.669,1.35,0.669c0.936,0,1.696-0.757,1.696-1.69V6.386H14.048z M10.818,10.69v-0.455c-0.168-0.023-0.338-0.034-0.509-0.034c-2.048,0-3.709,1.66-3.709,3.706c0,1.283,0.653,2.415,1.644,3.08c-0.654-0.668-1.057-1.583-1.057-2.592C7.187,12.375,8.805,10.731,10.818,10.69z"
                                                                 clip-rule="evenodd"></path>
                            </svg>
                        </Link>
                        <Link href="https://www.instagram.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><radialGradient
                                id="gradient1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#fd5"></stop>
                                <stop offset=".328" stop-color="#ff543f"></stop>
                                <stop offset=".348" stop-color="#fc5245"></stop>
                                <stop offset=".504" stop-color="#e64771"></stop>
                                <stop offset=".643" stop-color="#d53e91"></stop>
                                <stop offset=".761" stop-color="#cc39a4"></stop>
                                <stop offset=".841" stop-color="#c837ab"></stop>
                            </radialGradient>
                                <path fill="url(#gradient1)"
                                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                                <radialGradient id="gradient2" cx="11.786"
                                                cy="5.54" r="29.813" gradientTransform="matrix(1 0 0
                                                .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="#4168c9"></stop>
                                    <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
                                </radialGradient>
                                <path fill="url(#gradient2)"
                                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                                <path fill="#fff"
                                      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
                                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                                <path fill="#fff"
                                      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                            </svg>
                        </Link>
                    </span>
                    </div>
                </div>
            </div>
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

                <div className="text-black text-center p-4 w-screen justify-start relative">
                    <div className="grid grid-cols-5 justify-start items-start ml-10">
                        <div
                            className="cols-span-1 bg-white border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] mt-8 w-80 pb-2">
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

                        <div
                            className="bg-white col-span-1 border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] w-80 mt-8">
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
                        <div
                            className="-mt-24 border-[1px] bg-white border-gray-200 w-[22rem] h-[26rem] rounded-lg shadow-lg p-4 text-black text-start">
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

                        <div
                            className="col-span-1 bg-white text-black border border-gray-200 rounded-lg shadow-lg mt-12 w-[22rem] h-[19rem] p-4 -ml-6 flex flex-col justify-between">
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

                        <div
                            className="bg-white col-span-1 border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] w-80 mt-8">
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

                        <div
                            className="cols-span-1 bg-white border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] mt-8 w-80">
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

                        <div
                            className="bg-white col-span-1 border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] w-80 mt-8">
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
                        <div
                            className="cols-span-1 bg-white border-black border rounded-3xl shadow-xl flex flex-col h-[20.5rem] mt-8 w-80">
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
                    </div>
                    <div className="p-20"></div>
                </div>
            </div>
        </>
    );
}


