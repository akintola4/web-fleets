

export default function Hero() {

    return (

        <div className="flex px-5 xl:px-20 h-full flex-col justify-evenly pt-40 bg-gray-950 " data-aos="zoom-in">
            <div className="flex flex-col gap-10 items-center text-center">
                <h4 className="font-thin md:text-6xl text-3xl md:w-8/12 text-gray-50 font-fredokaone">Discover the world on wheel
                    with our car rental service</h4>
                {/* <p className="font-normal text-lg md:w-6/12 text-gray-500">Unlock your crypto potential with Ooido! Instantly track asset performance with real-time data, powerful analytics, and smart insights.</p> */}
                <button className=" bg-gray-50 text-gray-900 ring-0 border-0 rounded-lg px-8   py-2 hover:animate delay-50 hover:-translate-y-1 hover:scale-110 duration-200  dark:invert-0 dark:text-black">Get Started</button>

                <img src="img/hero-1.svg" alt="scal-150" />
            </div>

            <div className="flex flex-col p-2 md:p-5 my-10 inset-x-0 top-0 justify-center  text-black dark:text-white border-2 bg-white dark:bg-gray-800 dark:border-gray-400 rounded-2xl" data-aos="fade-up">

                <div className='md:grid grid-cols-1 hidden  lg:grid-cols-4 gap-4 items-center grid-rows-2 lg:grid-rows-1'>
                    <div className="mx-2 md:mx-6 w-full">

                        <label className="block mb-2 text-sm font-medium ">Location</label>
                        <select defaultValue="Lagos" id="countries" name='countries' aria-label='countries'
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300">
                            <option >Choose a country</option>
                            <option value="US">Lagos</option>
                            <option value="CA">Kano</option>
                            <option value="FR">Ondo</option>
                            <option value="DE">Benin</option>
                        </select>
                    </div>
                    <div className="mx-2 md:mx-6 w-full">
                        <label className="block mb-2 text-sm font-medium">Pick up</label>
                        <input
                            id="dropinDate"
                            type="date"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300"
                            placeholder="Choose date"
                        />
                    </div>

                    <div className="mx-2 md:mx-6 w-full">

                        <label className="block mb-2 text-sm font-medium ">Drop off</label>
                        <input id="dropoffDate" type="date" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300" placeholder='Choose  date'></input>
                    </div>

                    <div className=" mx-6 w-full ">

                        <label className="block mb-2 md-mb-none text-sm font-medium text-transparent ">Drop off</label>
                        <button className='w-full lg:w-10/12 px-4 justify-center py-2 border-transparent bg-gray-950 hover:bg-red-700 hover:border-transparent hover:text-gray-50 dark:bg-gray-100 dark:text-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50     transition ease-in-out  delay-150 duration-300 text-white rounded-lg'>Search</button>
                        </div>


                   
                </div>

                <div className='grid grid-cols-1 md:hidden  lg:grid-cols-4 gap-4 items-center grid-rows-2 lg:grid-rows-1'>
                    <div className="mx-2 md:mx-6 ">

                        <label className="block mb-2 text-sm font-medium ">Location</label>
                        <select defaultValue="Lagos" id="countries" name='countries' aria-label='countries'
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300">
                            <option >Choose a country</option>
                            <option value="US">Lagos</option>
                            <option value="CA">Kano</option>
                            <option value="FR">Ondo</option>
                            <option value="DE">Benin</option>
                        </select>
                    </div>
                    <div className="mx-2 md:mx-6 ">
                        <label className="block mb-2 text-sm font-medium">Pick up</label>
                        <input
                            id="dropinDate"
                            type="date"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300"
                            placeholder="Choose date"
                        />
                    </div>

                    <div className="mx-2 md:mx-6 ">

                        <label className="block mb-2 text-sm font-medium ">Drop off</label>
                        <input id="dropoffDate" type="date" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300" placeholder='Choose  date'></input>
                    </div>

                    <div className=" mx-6 ">
                        <button className='w-full lg:w-10/12 px-4 justify-center py-2 border-transparent bg-gray-950 hover:bg-red-700 hover:border-transparent hover:text-gray-50 dark:bg-gray-100 dark:text-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50     transition ease-in-out  delay-150 duration-300 text-white rounded-lg'>Search</button>
                        </div>


                   
                </div>

            </div>


        </div>
    )
}
