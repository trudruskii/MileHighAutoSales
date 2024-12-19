import Image from "next/image";
import ownerplaceholder from "../../../public/ownerplaceholder.png";


export default function About(){
    return(
        <>
            <div
                className="border border-red-900 bg-[rgba(0,0,0,0.1)] h-64 w-1/3 absolute right-1 top-52 z-10 flex">
                <p className="text-xs pl-4 items-end">Car ipsum dolor sit amet horsepower cabriolet spyder.
                    Limousine taxi cab hot rod accelerator seat belt hot rod tachometer. Hard top trunk dashboard
                    accelerator expressway trunk convertible. Patrol car suspension electric luxury car accelerator
                    bumper luxury car wing mirror.</p>
                <Image src={ownerplaceholder} alt="Place holder for owner"
                       className="h-56 w-52 rounded-xl items-end"></Image>
            </div>
            <div>
                <p className="text-black text-lg text-center">
                    Add contact information for this company. Established date/year. Additional services offered by company. Disclaimer.
                </p>
            </div>
        </>
    )
}
