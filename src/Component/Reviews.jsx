import ReadOnlyStarRating from "./Star";


export default function Reviews(props) {
  return (
    <div className="flex flex-col gap-4 h-full items-center justify-center rounded-2xl text-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-10 dark:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px]"  data-aos="fade-right" >
        <img  src={`img/${props.info.img}`} className=" " alt="" />
        <h4 className="text-lg text-gray-950 dark:text-white font-bold font-sans">{props.info.name}</h4>
        <ReadOnlyStarRating rating={props.info.star}/>
        <p className="font-bold text-gray-500 dark:text-white text-sm md:text-md ">{props.info.description}</p>
    </div>
  )
}
