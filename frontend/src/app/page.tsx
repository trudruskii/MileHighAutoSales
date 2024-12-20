import Image from "next/image";
import carplaceholder1 from "../../public/images/car1.jpg";
import carplaceholder2 from "../../public/images/car2.jpg";
import carplaceholder3 from "../../public/images/car3.jpg";
import carplaceholder4 from "../../public/images/car4.jpg";

export default function Home() {
  return (
      <>
          <div className="border-black border-l-[3px] border-r-[3px]">
              <div className="flex flex-col gap-4 border-t border-red-900 pt-12 pl-24">
                  <div className="flex flex-row items-center justify-start gap-2">
                      <label htmlFor="search-query">
                          Search our inventory here:
                      </label>
                      <input type="text" placeholder="Make, Model, Year..." className="border border-gray-400 rounded-xl p-1.5"/>
                  </div>

                      <p className="text-lg text-center mr-[28rem]">Results: Whatever result of the sort prints here.</p>

              </div>

              <div className="h-screen bg-white text-white text-center border-b-2 border-red-900 p-4 flex flex-row justify-start relative">
                  <div className="flex col-span-4 gap-12  justify-start items-start">
                      <div
                          className="bg-none border-black border rounded-3xl shadow-xl flex flex-col h-[25.5rem] w-72 mt-8">
                          <Image src={carplaceholder1} alt="Car placeholder image"
                                 className="h-64 w-72 rounded-t-3xl rounded-b-none"/>
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
                              <span className="pl-2
                              text-sm">Color:
                                  BlueTemplate</span>
                              <span className="text-sm">other
                                  stuff stuff</span>
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
                  <div className="absolute right-20 -mt-24 border-[1px] border-gray-200 w-[24rem] h-[26rem] rounded-lg shadow-lg p-4 text-black text-start">
                      <p className="font-light">
                          Car ipsum dolor sit amet steering wheel. Buggy limousine pickup truck gas powered dragster trunk. Coupe supercar fuel engine fuel gauge spider gasoline. Drive luxury car race car lane expressway microcar. Navigation stock car cross-over vehicle station wagon suspension street. Taxi automobile tailgate windshield suspension sunroof windscreen gear. Auto torque radio solar powered electric engine roadster pickup truck wing mirror solar powered. Minivan hatchback roadster hatchback blinker gas-electric bus seat belt brake light.
                      </p>
                  </div>
                  <div className="absolute right-10 bottom-20 text-black border border-gray-200 rounded-lg shadow-lg w-[30rem] h-[14rem] p-4 flex flex-col justify-between">
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

              </div>
          </div>
      </>
  );
}
