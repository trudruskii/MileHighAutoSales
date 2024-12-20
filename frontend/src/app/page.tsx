import Image from "next/image";
import carplaceholder1 from "../../public/car1.jpg";
import carplaceholder2 from "../../public/car2.jpg";
import carplaceholder3 from "../../public/car3.jpg";
import carplaceholder4 from "../../public/car4.jpg";

export default function Home() {
  return (
      <>
          <div className="border-black border-l-[3px] border-r-[3px]">
              <div className="flex flex-col gap-4 border-t border-red-900 pt-12 pl-24">
                  <div className="flex flex-row items-center justify-start gap-2">
                      <label htmlFor="search-query">
                          Search our inventory from here:
                      </label>
                      <input type="text" placeholder="Make, Model, Year..." className="border border-gray-400 rounded-xl p-1.5"/>
                  </div>

                      <p className="text-lg text-center mr-[28rem]">Results: Whatever result of the sort prints here.</p>

              </div>

              <div className="h-screen mx-auto bg-white text-white text-center border-b-2 border-red-900 p-4">
                  <div className="flex col-span-4 gap-12 mx-auto justify-start items-start">
                      <div
                          className="bg-none border-black border rounded-3xl shadow-xl flex flex-col h-[25.5rem] w-72 mt-8">
                          <Image src={carplaceholder1} alt="Car placeholder image"
                                 className="h-64 w-72 rounded-t-3xl rounded-b-none"/>
                          <span className="text-black p-2">Car title in this spot</span>
                          <div className="grid grid-cols-2 text-black">
                              <span className="pl-2 text-sm">Color: BlueTemplate</span>
                              <span className="text-sm">other: stuff stuff</span>
                          </div>
                          <span
                              className="flex justify-end text-black mt-10 pr-4 font-semibold text-sm gap-2 items-center">
                              Price:
                              <span className="font-bold text-lg">$89,000</span>
                          </span>
                      </div>

                      <div className="bg-none border-black border rounded-3xl shadow-xl flex flex-col h-[25.5rem] w-72 mt-8">
                          <Image src={carplaceholder2} alt="Car placeholder image" className="h-64 w-72 rounded-t-3xl rounded-b-none"/>
                          <span className="text-black p-2">Car title in this spot</span>
                          <div className="grid grid-cols-2 text-black">
                              <span className="pl-2 text-sm">Color: BlueTemplate</span>
                              <span className="text-sm">other: stuff stuff</span>
                          </div>
                          <span className="flex justify-end text-black mt-10 pr-4 font-semibold text-sm gap-2 items-center">
                              Price:
                              <span className="font-bold text-lg">$89,000</span>
                          </span>
                      </div>

                      <div className="bg-none border-black border rounded-3xl shadow-xl flex flex-col h-[25.5rem] w-72 mt-8">
                          <Image src={carplaceholder3} alt="Car placeholder image" className="h-64 w-72 rounded-t-3xl rounded-b-none"/>
                          <span className="text-black p-2">Car title in this spot</span>
                          <div className="grid grid-cols-2 text-black">
                              <span className="pl-2 text-sm">Color: BlueTemplate</span>
                              <span className="text-sm">other: stuff stuff</span>
                          </div>
                          <span className="flex justify-end text-black mt-10 pr-4 font-semibold text-sm gap-2 items-center">
                              Price:
                              <span className="font-bold text-lg">$89,000</span>
                          </span>
                      </div>

                      <div className="bg-none border-black border rounded-3xl shadow-xl flex flex-col h-[25.5rem] w-72 mt-8">
                          <Image src={carplaceholder4} alt="Car placeholder
                          image" className="h-64 w-72 rounded-t-3xl rounded-b-none"/>
                          <span className="text-black p-2">Car title in this spot</span>
                          <div className="grid grid-cols-2 text-black">
                              <span className="pl-2 text-sm">Color: BlueTemplate</span>
                              <span className="text-sm">other: stuff stuff</span>
                          </div>
                          <span className="flex justify-end text-black mt-10 pr-4 font-semibold text-sm gap-2 items-center">
                              Price:
                              <span className="font-bold text-lg">$89,000</span>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}
