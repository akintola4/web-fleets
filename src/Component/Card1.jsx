import { PiGaugeLight } from "react-icons/pi";
import { RiSteering2Fill } from "react-icons/ri";
import { TbArmchair2 } from "react-icons/tb";


export default function Card1(props) {
  return (
    <div className="flex flex-col w-full gap-6 p-4 py-10 text-gray-900 dark:text-gray-50 dark:bg-gray-800 bg-gray-50 items-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_4px]  dark:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px]  hover:animate delay-50 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer rounded-lg"  data-aos="fade-right">
   <img  src={`img/${props.info.img}`} className="w-10/12  dark:invert-0" alt="" />
    <h4 className="text-sm md:text-lg ">{props.info.title}</h4>
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 px-2">
      <div className="flex flex-row gap-2 items-center">
      <TbArmchair2 />
        <p className="text-gray-500">{props.info.seats} seaters</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
      <RiSteering2Fill />
        <p className="text-gray-500">{props.info.driveType} </p>
      </div>
      <div className="flex flex-row gap-2 items-center">
      <PiGaugeLight />
        <p className="text-gray-500">{props.info.range} </p>
      </div>
    </div>
    <p className="text-md md:text-xl font-bold">Starting at N{props.info.price}/Day</p>

    <div className="flex flex-row gap-10">
    <button className=" bg-gray-200 text-gray-900 ring-0 border-0 rounded-lg px-8  hover:bg-gray-950 hover:text-gray-50  py-2 hover:animate delay-50 hover:-translate-y-1 hover:scale-110 duration-200  dark:invert-0 dark:text-black">Details</button>
    <button className='px-4 py-2 lg:text-sm xl:text-md bg-red-700 hover:bg-gray-950 hover:border-transparent hover:text-gray-50 dark:bg-red-800 dark:text-gray-50 dark:hover:bg-gray-950 dark:hover:text-gray-50    transition ease-in-out  delay-150 duration-300 text-white rounded-lg'>Book Now</button>

    </div>
    </div>
  )
}
