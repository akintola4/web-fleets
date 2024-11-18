

export default function Card2(props) {
  return (
    <div className="flex flex-col gap-4 h-full items-center justify-center text-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-10 dark:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px] rounded-lg"  data-aos="fade-right" >
        <img  src={`img/${props.info.img}`} className=" p-4 bg-neutral-500 rounded-xl dark:invert-0" alt="" />
        <h4 className="text-lg text-gray-950 dark:text-white font-bold font-sans">{props.info.title}</h4>
        <p className="font-bold text-gray-500 dark:text-white text-sm md:text-md ">{props.info.description}</p>
    </div>
  )
}
