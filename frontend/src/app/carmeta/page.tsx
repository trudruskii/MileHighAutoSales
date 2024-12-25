// Details for this page should include:
// Hero Image
// Title
// Color
// Specs (More specifics)
//    Vin
//    Transmission
//    Cylinders
//    Engine
//    Mileage
//    Doors
//    Drive Train
//    Interior Upholstery & Color
//    Bluetooth, Cameras, Sensors, Alarms, Etc...
//    Price
// contact

import Image from "next/image"
import heroplaceholder from "../../../public/images/2017-Kia-Sorento-LX-Sport-Utility-4D-2.jpg";

export default function Carmeta(){
    return(
        <>
           <div className="flex flex-col border-[1px] border-t-[2px] border-t-red-900 border-black w-[60%] h-[35rem] bg-gray-300 rounded-md shadow-lg shadow-red-900 mx-auto mt-4 mr-4 text-red-900">
               <h3 className="text-end pt-4 mr-4 text-2xl font-extrabold text-red-900">2017 Kia Sorento LX Sport Utility</h3>
               <div className="grid grid-cols-2">
                   <div className="flex flex-col ml-2 gap-2">
                       <div className="text-lg font-[popf] font-bold text-center mt-12 mr-28 pb-1">Vehicle
                           Specifications
                       </div>
                       <div className="h-[.08rem] w-[11.5rem] bg-black ml-[10.5rem] -mt-2"></div>
                       <ul className="flex flex-wrap justify-start items-start">
                           <li className="text-left text-sm font-semibold">
                               Color: <span className="font-light"> White</span>
                           </li>
                       </ul>
                       <ul className="flex flex-wrap justify-start items-start">
                           <li className="text-left text-sm font-semibold">
                               Interior:<span className="font-light"> Fabric</span>
                           </li>
                       </ul>
                       <ul className="flex flex-wrap justify-start items-start">
                           <li className="text-left text-sm font-semibold">
                               Interior Color:<span className="font-light"> Black</span>
                           </li>
                       </ul>
                       <ul className="flex flex-wrap justify-start items-start">
                           <li className="text-left text-sm font-semibold">
                               Doors:<span className="font-light"> 4</span>
                           </li>
                       </ul>
                       <ul className="flex flex-wrap justify-start items-start">
                           <li className="text-left text-sm font-semibold">
                               Engine: <span className="font-light">2.4L V4</span>
                           </li>
                       </ul>
                       <ul className="flex flex-wrap justify-start items-start">
                           <li className="text-left text-sm font-semibold">
                               Transmission:<span className="font-light "> Automatic</span>
                           </li>
                       </ul>
                       <ul className="flex flex-wrap justify-start items-start">
                           <li className="text-left text-sm font-semibold">
                               Drive Train:<span className="font-light"> FWD</span>
                           </li>
                       </ul>
                       <span className="flex-grow text-sm font-[popf]">some words can go right here if I want them to and what</span>
                   </div>
                   <div className="mt-2 relative">
                       <Image src={heroplaceholder} alt="Map placeholder image"
                              className="border-l-[3px] border-b-[3px] border-black h-[31.4rem] w-full rounded-l-lg rounded-b-lg"/>
                           <span className="flex justify-end items-end mr-6 -mt-[30rem] font-bold text-4xl   text-white font-[rrf]">$9,900</span>
                   </div>
               </div>
           </div>

            <div className="spaceholder p-24">

            </div>
        </>
    )
}