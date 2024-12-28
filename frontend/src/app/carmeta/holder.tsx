// Details for this page should include:
// Hero Image
// Specs (More specifics)
//    Mileage
//    Bluetooth, Cameras, Sensors, Alarms, Etc...
//    Price
// contact

import Image from "next/image"
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



export default function Carmeta(){
    return(
        <>
            <div className="absolute left-[1rem] top-[2rem] w-[27%] h-[40rem] border-[2px] border-black bg-gradient-to-b from-gray-100 to-gray-200 flex flex-wrap rounded-lg shadow-red-900 shadow-lg z-30">
                <div className="flex flex-col bg-white text-black px-2">
                    <div className="border-b-[1px] border-black py-4">
                        <span className="text-lg font-semibold">About this Vehicle</span>
                        <div className="h-[0.5px] w-[9.75rem] bg-black"></div>
                        <p className="pt-2 font-[popf] text-[.80rem]">
                            Very nice suv! Previous owner only drove 91,000 miles.
                            Very good on gas mileage having a combined MPG of 24.0, has all of the standard electrical
                            components. The interior and the exterior are in very good condition. Tires are in good
                            shape! This vehicle only has a salvaged title due to a theft recovery insurance claim with
                            no accidents. The asking price is only $9,900.
                        </p>
                    </div>
                    <div className="flex flex-grow mt-2 -mx-[.53rem] pt-10 bg-black ">
                    </div>
                </div>

            </div>
            <div className="flex flex-col border-[1px] border-t-[2px] border-t-red-900 border-black w-[70%] h-[35rem] bg-black rounded-md shadow-lg shadow-red-900 mx-auto mt-4 mr-[1rem]">
                <h3 className="text-end pt-4 mr-4 text-2xl font-extrabold text-white">2017 Kia Sorento LX Sport
                    Utility</h3>
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-col px-6 gap-2">
                        <div className="text-lg font-[popf] font-bold text-white text-center mt-12 pb-1 ">Vehicle
                            Specifications
                        </div>
                        <div className="h-[.08rem] w-[24rem] bg-red-900 -mt-2"></div>
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
            <div
                className="h-[40rem] bg-black border-[2px] border-b-black border-l-[1px] border-r-[1px] border-red-900 border-t-[3px] shadow-red-900 shadow-lg rounded-lg mx-4 flex flex-wrap gap-2 pt-1">
                <Image src={stagedplaceholder1} alt="1st staged car placeholder image"
                       className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[10rem] rounded-l-lg rounded-b-lg ml-8"/>
                <div className="bg-white w-[2px] h-[10rem] ml-1 -mr-1"></div>
                <Image src={stagedplaceholder2} alt="2nd staged car placeholder image"
                       className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[10rem] rounded-l-lg rounded-b-lg"/>
                <div className="bg-white w-[2px] h-[10rem] ml-1 -mr-1"></div>
                <Image src={stagedplaceholder3} alt="3rd staged car placeholder image"
                       className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[10rem] rounded-l-lg rounded-b-lg"/>
                <div className="bg-white w-[2px] h-[10rem] ml-1 -mr-1"></div>
                <Image src={stagedplaceholder4} alt="4th staged car placeholder image"
                       className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[10rem] rounded-l-lg rounded-b-lg"/>
                <div className="bg-white w-[2px] h-[10rem] ml-1 -mr-1"></div>
                <Image src={stagedplaceholder5} alt="5th staged car placeholder image"
                       className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[10rem] rounded-l-lg rounded-b-lg"/>
                <div className="bg-white w-[2px] h-[10rem] ml-1 -mr-1"></div>
                <Image src={stagedplaceholder6} alt="6th staged car placeholder image"
                       className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[10rem] rounded-l-lg rounded-b-lg"/>
                <div className="bg-white w-[2px] h-[10rem] ml-1 -mr-1"></div>
                <Image src={stagedplaceholder7} alt="7th staged car placeholder image"
                       className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[10rem] rounded-l-lg rounded-b-lg"/>
                <div className="bg-white w-[2px] h-[10rem] ml-1 -mr-1"></div>
                <Image src={stagedplaceholder8} alt="8th staged car placeholder image"
                       className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[10rem] rounded-l-lg rounded-b-lg"/>
                <div className="bg-white w-[2px] h-[10rem] ml-1 -mr-1"></div>
                <Image src={stagedplaceholder8} alt="9th staged car placeholder image"
                       className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[10rem] rounded-l-lg rounded-b-lg"/>
                <div className="bg-white w-[2px] h-[10rem] ml-1 -mr-1"></div>
                <Image src={stagedplaceholder8} alt="10th staged car placeholder image"
                       className="border-l-[3px] border-l-red-900 border-[1px] border-black h-[10rem] w-[10rem] rounded-l-lg rounded-b-lg"/>
            </div>
            <div className="spaceholder p-24">
                <div
                    className="flex flex-col flex-grow justify-end items-end px-2 py-1 border-l-[1px] border-black bg-white">
                    <span className="text-xl mr-[0.6rem] font-[tfr] text-red-900">Mile High Auto Sales</span>
                    <span className="font-bold text-[1rem] mr-[2.4rem]">Hours of Operation</span>
                    <div className="flex flex-row flex-grow w-[11.5rem] h-16 mb-1 pb-2">
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
                    <div className="text-sm font-[popf] text-black mr-6 py-2">
                        <Link
                            href="https://www.google.com/maps/place/2606+Bridge+Blvd+SW,+Albuquerque,+NM+87105/@35.0667321,-106.6981683,17z/data=!3m1!4b1!4m6!3m5!1s0x87220d138d6bef69:0xe0e80640b3dc0750!8m2!3d35.0667277!4d-106.695588!16s%2Fg%2F11cp9l52rt?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                            className=" hover:text-red-900">2606 Bridge Blvd SW,<br/> Albuquerque, NM 87105</Link>
                        <br/><Link href="tel:+15056392121" className=" hover:text-red-900">
                        505-639-2121
                    </Link>
                    </div>

                    <Image src={mapplaceholder} alt="Map placeholder"
                           className="border-l-[3px] border-l-red-900 border-b-[1px] border-b-black h-[12rem] w-[12rem] rounded-l-lg rounded-b-lg mb-2"/>
                </div>
            </div>
        </>
    )
}
