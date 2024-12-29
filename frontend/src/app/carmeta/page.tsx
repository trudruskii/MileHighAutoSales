'use client'

//    Mileage

import Image from "next/image"
import kbbplaceholder from "../../../public/images/KellyBlueBookPlaceholder.png"
import nhtsaplaceholder from "../../../public/images/NHTSAplaceholder.png"
import carfaxplaceholder from "../../../public/images/CarFaxplaceholder.png"
import stagedplaceholder1 from "../../../public/images/2017-Kia-Sorento-LX-Sport-Utility-4D.jpg";
import heroplaceholder from "../../../public/images/2017-Kia-Sorento-LX-Sport-Utility-4D-2.jpg";
import stagedplaceholder2 from "../../../public/images/2017-Kia-Sorento-LX-Sport-Utility-4D-3.jpg";
import stagedplaceholder3 from "../../../public/images/2017-Kia-Sorento-LX-Sport-Utility-4D-4.jpg";
import stagedplaceholder4 from "../../../public/images/2017-Kia-Sorento-LX-Sport-Utility-4D-5.jpg";
import stagedplaceholder5 from "../../../public/images/2017-Kia-Sorento-LX-Sport-Utility-4D-6.jpg";
import stagedplaceholder6 from "../../../public/images/2017-Kia-Sorento-LX-Sport-Utility-4D-7.jpg";
import stagedplaceholder7 from "../../../public/images/2017-Kia-Sorento-LX-Sport-Utility-4D-8.jpg";
import stagedplaceholder8 from "../../../public/images/2017-Kia-Sorento-LX-Sport-Utility-4D-9.jpg";
import mapplaceholder from "../../../public/images/mapplaceholder.jpg";
import Link from "next/link";
import { Rating } from "flowbite-react"



export default function Carmeta(){
    return(
        <>
            <div className="border-black border-l-[1px] border-r-[1px] -mt-6">
                <div className="absolute left-[.75rem] top-[4rem] w-[27.9%] h-[36rem] border-l-[2px] border-l-black border-red-900 border-t-[2px] border-r-[1px] bg-gradient-to-b from-gray-100 to-gray-200 flex flex-wrap rounded-lg shadow-red-900 shadow-lg z-30">
                    <div className="flex flex-col px-2">
                        <div className="flex flex-col h-[16rem] -mx-[.49rem] bg-gray-300 text-white border-b-[1px] border-red-900">
                            <h4 className="text-black text-center font-[popf] font-semibold text-lg mt-2 mb-2 ">See the reviews for this vehicle</h4>
                            <div className="h-[2px] w-[80%] bg-red-900 mx-auto"></div>
                            <div className="flex flex-row justify-center items-center mx-auto mb-auto mt-4 gap-4">
                                <Image src={kbbplaceholder} alt="Kelly Blue Book placeholder image"
                                       className="border-l-[3px] border-l-red-900 border-b-[1px] border-b-black h-[9rem] w-[9rem] rounded-l-lg rounded-b-lg"/>
                                <div className="h-24 w-[1px] bg-red-900"></div>
                                <Image src={nhtsaplaceholder} alt="NHTSA placeholder image"
                                       className="border-l-[3px] border-l-red-900 border-b-[1px] border-b-black h-[9rem] w-[9rem] rounded-l-lg rounded-b-lg"/>
                                <div className="h-24 w-[1px] bg-red-900"></div>
                                <Image src={carfaxplaceholder} alt="CarFax placeholder image"
                                       className="border-l-[3px] border-l-red-900 border-b-[1px] border-b-black h-[9rem] w-[9rem] rounded-l-lg rounded-b-lg"/>
                            </div>
                            <div className="flex flex-row mx-auto pb-3 gap-1">
                                <Rating className="text-green-800">
                                    <Rating.Star/>
                                    <Rating.Star/>
                                    <Rating.Star/>
                                    <Rating.Star/>
                                    <Rating.Star filled={false}/>
                                </Rating>
                                <h4 className="text-sm font-bold text-black"> National Safety Rating</h4>
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow px-3 pt-12 text-black">
                            <span className="text-lg font-semibold">About this Vehicle</span>
                            <div className="h-[1px] w-[9.75rem] bg-black mb-2"></div>
                            <p className="pt-2 font-[popf] text-sm">
                                Very nice suv! Previous owner only drove 91,000 miles.
                                Very good on gas mileage having a combined MPG of 24.0, has all of the standard
                                electrical
                                components. The interior and the exterior are in very good condition. Tires are in good
                                shape! This vehicle only has a salvaged title due to a theft recovery insurance claim
                                with
                                no accidents. The asking price is only $9,900.
                            </p>
                        </div>
                    </div>

                </div>
                <div
                    className="flex flex-col border-[1px] border-t-[2px] border-t-red-900 border-black w-[70%] h-[35rem] bg-black rounded-md shadow-lg shadow-red-900 mx-auto mt-7 mr-[1rem]">
                    <h3 className="text-end pt-4 mr-4 text-2xl font-extrabold text-white">2017 Kia Sorento LX Sport
                        Utility</h3>
                    <div className="flex flex-wrap justify-between">
                        <div className="flex flex-col px-6 gap-2 mx-auto">
                            <div className="text-lg font-[popf] font-bold text-white text-center mt-8 pb-1 ">Vehicle
                                Specifications
                            </div>
                            <div className="h-[.08rem] w-[24rem] bg-red-900 -mt-2 mb-2"></div>
                            <div className="grid grid-cols-2 mt-3">
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-semibold">
                                        Title:<span className="font-light"> Salvaged</span>
                                    </li>
                                </ul>
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-xs font-semibold">
                                        VIN:<span className="font-light"> 1HGBH41JXMN109186</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-2">
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-semibold">
                                        Interior:<span className="font-light"> Fabric</span>
                                    </li>
                                </ul>
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-xs font-semibold">
                                        Interior Color:<span className="font-light"> Black</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-2">
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-semibold">
                                        Color: <span className="font-light"> White</span>
                                    </li>
                                </ul>
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-semibold">
                                        Doors:<span className="font-light"> 4</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-2">
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-semibold">
                                        Engine: <span className="font-light">2.4L V4</span>
                                    </li>
                                </ul>
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-semibold">
                                        Transmission:<span className="font-light "> Automatic</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-2">
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-semibold">
                                        Drive Train:<span className="font-light"> FWD</span>
                                    </li>
                                </ul>
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-semibold">
                                        MPG:<span className="font-light"> 21 City, 24 Highway</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-2">
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-semibold">
                                        NHTSA Rating:<span className="font-light"> 5/5</span>
                                    </li>
                                </ul>
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-semibold">
                                        Fuel Type:<span className="font-light"> Gasoline</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-2">
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-light">
                                        Cold A/C
                                    </li>
                                </ul>
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-light">
                                        CD Stereo
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-2">
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-light">
                                        Remote Alarm
                                    </li>
                                </ul>
                                <ul className="flex flex-wrap justify-start items-start text-white">
                                    <li className="text-left text-sm font-light">
                                        Back-up Camera
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-2 relative">
                            <Image src={heroplaceholder} alt="Hero car placeholder image"
                                   className="border-l-[3px] border-l-red-900 border-b-[1px] border-b-black h-[31.4rem] w-full rounded-l-lg rounded-b-lg"/>
                            <span
                                className="flex justify-end items-end mr-6 -mt-[30rem] font-bold text-4xl text-white font-[rrf]">$9,900</span>
                        </div>
                    </div>
                </div>
                <div className="h-auto bg-black border-[2px] border-b-black border-l-[1px] border-r-[1px] border-red-900 border-t-[3px] shadow-red-900 shadow-lg rounded-lg mx-4 flex flex-wrap gap-2 pt-1">
                    <Image src={stagedplaceholder1} alt="1st staged car placeholder image"
                           className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[9.8rem] rounded-l-lg rounded-b-lg ml-4"/>
                    <Image src={stagedplaceholder2} alt="2nd staged car placeholder image"
                           className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[9.8rem] rounded-l-lg rounded-b-lg"/>
                    <Image src={stagedplaceholder2} alt="2nd staged car placeholder image"
                           className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[9.8rem] rounded-l-lg rounded-b-lg"/>
                    <Image src={stagedplaceholder3} alt="3rd staged car placeholder image"
                           className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[9.8rem] rounded-l-lg rounded-b-lg"/>
                    <Image src={stagedplaceholder4} alt="4th staged car placeholder image"
                           className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[9.8rem] rounded-l-lg rounded-b-lg"/>
                    <Image src={stagedplaceholder5} alt="5th staged car placeholder image"
                           className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[9.8rem] rounded-l-lg rounded-b-lg"/>
                    <Image src={stagedplaceholder6} alt="6th staged car placeholder image"
                           className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[9.8rem] rounded-l-lg rounded-b-lg"/>
                    <Image src={stagedplaceholder7} alt="7th staged car placeholder image"
                           className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[9.8rem] rounded-l-lg rounded-b-lg"/>
                    <Image src={stagedplaceholder8} alt="8th staged car placeholder image"
                           className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[9.8rem] rounded-l-lg rounded-b-lg"/>
                    <Image src={stagedplaceholder8} alt="9th staged car placeholder image"
                           className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[9.8rem] rounded-l-lg rounded-b-lg"/>
                    <Image src={stagedplaceholder8} alt="10th staged car placeholder image"
                           className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[9.8rem] rounded-l-lg rounded-b-lg"/>
                    <Image src={stagedplaceholder1} alt="1st staged car placeholder image"
                           className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[9.8rem] rounded-l-lg rounded-b-lg ml-4"/>
                </div>

                <div className="h-[1px] w-[96%] bg-red-900 mb-10 mt-20 mx-auto"></div>
                <div className="flex flex-row px-4 py-6 w-full bg-black gap-4 rounded-t-lg rounded-b-lg">
                    <div className="flex flex-row bg-gray-300 border-[1px] border-black rounded-lg">
                        <div className="flex flex-col px-4 py-4 ml-6">
                            <span className="text-xl mr-[0.6rem] font-[tfr] text-red-900">Mile High Auto Sales</span>
                            <div className="text-sm font-[popf] text-black mr-6 py-2">
                                <Link
                                    href="https://www.google.com/maps/place/2606+Bridge+Blvd+SW,+Albuquerque,+NM+87105/@35.0667321,-106.6981683,17z/data=!3m1!4b1!4m6!3m5!1s0x87220d138d6bef69:0xe0e80640b3dc0750!8m2!3d35.0667277!4d-106.695588!16s%2Fg%2F11cp9l52rt?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                                    className=" hover:text-red-900">2606 Bridge Blvd SW,<br/> Albuquerque, NM
                                    87105</Link>
                                <br/><h3>Alex Ortega</h3><Link href="tel:+15056392121" className=" hover:text-red-900">
                                505-639-2121
                            </Link>
                            </div>
                            <div className="flex flex-row gap-1 -ml-[16px]">
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
                            24 24" width="24" height="24">
                                        <path fill="#212121" fill-rule="evenodd"
                                              d="M5.452,3h13.096C20.902,3,22,4.098,22,5.452v13.096C22,20.902,20.902,22,18.548,22H5.452C4.098,22,3,20.902,3,18.548V5.452C3,4.098,4.098,3,5.452,3z"
                                              clip-rule="evenodd"></path>
                                        <path fill="#ec407a"
                                              fill-rule="evenodd"
                                              d="M14.604,10.303c0.788,0.563,1.753,0.894,2.796,0.894v-2.006c-0.198,0-0.394-0.021-0.587-0.061v1.578c-1.042,0-2.007-0.331-2.796-0.894v4.092c0,2.047-1.66,3.706-3.709,3.706c-0.764,0-1.475-0.231-2.064-0.627c0.673,0.688,1.613,1.115,2.652,1.115c2.048,0,3.709-1.66,3.709-3.706L14.604,10.303L14.604,10.303z M15.328,8.281c-0.402-0.44-0.667-1.008-0.724-1.637v-0.258h-0.557C14.188,7.184,14.666,7.867,15.328,8.281L15.328,8.281z M9.54,15.416c-0.225-0.295-0.347-0.656-0.346-1.026c0-0.936,0.759-1.696,1.696-1.696c0.174,0,0.348,0.027,0.515,0.08v-2.05c-0.195-0.027-0.39-0.038-0.587-0.034v1.595c-0.167-0.053-0.34-0.08-0.515-0.08c-0.937,0-1.696,0.759-1.696,1.696C8.606,14.563,8.986,15.137,9.54,15.416z"
                                              clip-rule="evenodd"></path>
                                        <path
                                            fill="#fff" fill-rule="evenodd"
                                            d="M14.017,9.815c0.788,0.563,1.753,0.894,2.796,0.894v-1.578c-0.582-0.124-1.097-0.428-1.484-0.851c-0.663-0.414-1.141-1.096-1.281-1.894h-1.462v8.009c-0.004,0.933-0.761,1.69-1.696,1.69c-0.551,0-1.04-0.262-1.35-0.669c-0.553-0.279-0.933-0.853-0.933-1.515c0-0.936,0.759-1.696,1.696-1.696c0.18,0,0.353,0.028,0.515,0.08V10.69c-2.012,0.041-3.63,1.685-3.63,3.705c0,1.009,0.403,1.924,1.057,2.592c0.59,0.396,1.3,0.627,2.064,0.627c2.048,0,3.709-1.66,3.709-3.706L14.017,9.815L14.017,9.815z"
                                            clip-rule="evenodd"></path>
                                        <path fill="#81d4fa" fill-rule="evenodd"
                                              d="M16.813,9.131v-0.427c-0.525,0.001-1.039-0.146-1.484-0.424C15.722,8.712,16.242,9.009,16.813,9.131z M14.048,6.386c-0.014-0.076-0.024-0.153-0.031-0.23v-0.258h-2.018v8.01c-0.003,0.933-0.761,1.69-1.696,1.69c-0.275,0-0.533-0.065-0.763-0.181c0.31,0.407,0.8,0.669,1.35,0.669c0.936,0,1.696-0.757,1.696-1.69V6.386H14.048z M10.818,10.69v-0.455c-0.168-0.023-0.338-0.034-0.509-0.034c-2.048,0-3.709,1.66-3.709,3.706c0,1.283,0.653,2.415,1.644,3.08c-0.654-0.668-1.057-1.583-1.057-2.592C7.187,12.375,8.805,10.731,10.818,10.69z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                </Link>
                                <Link href="https://www.instagram.com/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                        <radialGradient
                                            id="gradient1" cx="19.38" cy="42.035" r="44.899"
                                            gradientUnits="userSpaceOnUse">
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
                            </div>
                        </div>

                        <div className="flex flex-col w-[11.5rem] h-16 mb-1 pb-2">
                            <span className="font-bold text-[1rem] mr-[2.4rem]">Hours of Operation</span>
                            <ul className="flex flex-col gap-1 text-[.78rem]">
                                <li>
                                    Sunday: Closed
                                </li>
                                <li>
                                    Monday: 8AM-5PM
                                </li>
                                <li>
                                    Tuesday: 8AM-5PM
                                </li>
                                <li>
                                    Wednesday: 8AM-5PM
                                </li>
                                <li>
                                    Thursday: 8AM-5PM
                                </li>
                                <li>
                                    Friday: 8AM-5PM
                                </li>
                                <li>
                                    Saturday: 10AM-3PM
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="h-18 w-[1px] bg-red-900">
                    </div>

                    <div className="flex justify-center items-center">
                        <Image src={mapplaceholder} alt="Map placeholder"
                               className="border-l-[3px] border-l-red-900 border-b-[1px] border-b-black h-[13rem] w-[60rem] rounded-l-lg rounded-b-lg"/>
                    </div>
                </div>
            </div>

        </>
    )
}
