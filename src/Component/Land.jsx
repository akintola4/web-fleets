import { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Reviews from "./Reviews.jsx";
import reviewsData from "./reviewsData.js";
import car from "./cars";
import workdata from "./work";
import Footer from "./Footer";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import MovingDiv from './MovingDiv';
export default function Land() {

    useEffect(() => {
        AOS.init();
    }, [])
    const card1 = car.map((info) => {
        return <Card1
            //the unqiue id for the data a unqiue key prop
            key={info.id}
            //{require("../images/avatar.png")}
            // it like this info is an object containig all the data in the data.js file
            //we then put info() inside our prop thus when we want to soruce the data 
            //we use prop.info."name of the data"
            //remember info is an object so we use dot notation to source our data from it
            info={info} //this contains all the data we need 


        //we can also use the spread operator to access the object 
        // {...info}
        //if you use this method remove all the .info we used in our card component
        />
    })


    const card2 = workdata.map((info) => {
        return <Card2
            //the unqiue id for the data a unqiue key prop
            key={info.id}
            info={info} //this contains all the data we need 
        />
    })

    const reviewCard = reviewsData.map((info) => {
        return <Reviews
            //the unqiue id for the data a unqiue key prop
            key={info.id}
            info={info} //this contains all the data we need 
        />
    })
    const [ProductType, setProductType] = useState('lagos');
    return (
        <div className="scroll-smooth flex flex-col ">
            <Nav />
            <Hero />
            
            <MovingDiv>
            <section id='brand-logos'  className='brand-logos  grid grid-cols-7 md:grid-cols-7 justify-center items-center md:grid-rows-1 gap-10 p-4 md:px-10 lg:px-20'>
                <img src="img/brand-logo-1.svg" className='w-full scale-150 md:scale-100 md:w-auto' alt="brand-logo" />
                <img src="img/brand-logo-2.svg" className='w-full scale-150 md:scale-100 md:w-auto' alt="brand-logo"  />
                <img src="img/brand-logo-3.svg" className='w-full scale-150 md:scale-100 md:w-auto' alt="brand-logo"  />
                <img src="img/brand-logo-4.svg" className='w-full scale-150 md:scale-100 md:w-auto' alt="brand-logo"  />
                <img src="img/brand-logo-5.svg" className='w-full scale-150 md:scale-100 md:w-auto' alt="brand-logo"  />
                <img src="img/brand-logo-6.svg" className='w-full scale-150 md:scale-100 md:w-auto' alt="brand-logo"  />
                <img src="img/brand-logo-7.svg" className='w-full scale-150 md:scale-100 md:w-auto' alt="brand-logo"  />
            </section>
            </MovingDiv>


            <section className=" flex flex-col items-center py-10 gap-10 mx-2  md:mx-10"  data-aos="zoom-in">
                <div className="flex flex-col text-center items-center gap-4">
                    <h4 className="dark:text-gray-50 text-gray-950 md:text-6xl font-extrabold font-sans text-2xl">Top rated rented cars</h4>
                    <p className="w-10/12 xl:w-8/12 text-gray-700 text-sm md:text-md dark:text-gray-300">Et nesciunt expedita aut enim obcaecati sit omnis magnam est numquam iure ut
                        commodi dolorem. Et molestiae autem ut corrup</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 w-10/12 md:w-full items-center md:justify-evenly gap-5  xl:gap-20 ">
                    {card1}
                </div>
            </section>
            <section className=" flex flex-col gap-10 bg-gray-50 dark:bg-gray-800 dark:text-white px-10 items-center py-10" data-aos="fade-right">
                <div className="flex flex-col text-center gap-2">
                    <h4 className=" text-gray-950 md:text-6xl font-extrabold dark:text-white font-sans text-2xl">How it works</h4>
                    <p className=" text-gray-700 w-10/12 xl:w-8/12 mx-auto dark:text-gray-300">Et nesciunt expedita aut enim obcaecati sit omnis magnam est numquam iure ut
                        commodi dolorem. Et molestiae autem ut corrup</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-evenly gap-5 md:gap-20 ">
                    {card2}
                </div>
            </section>
            <section className=" flex flex-col py-10 gap-10 mx-5  md:mx-10" data-aos="zoom-in" >
                <div className="flex flex-col text-center items-center gap-4" data-aos="fade-right">
                    <h4 className="dark:text-gray-50 text-gray-950 md:text-6xl font-extrabold font-sans text-2xl">Best services and luxury cars</h4>
                    <p className="w-10/12 xl:w-6/12 text-gray-700 text-sm md:text-md dark:text-gray-300">Et nesciunt expedita aut enim obcaecati sit omnis magnam est numquam iure ut
                        commodi dolorem. Et molestiae autem ut corrup</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-10" data-aos="fade-right">
                    <img src="img/hero-2.svg" className="md:w-6/12 dark:invert-0" alt="" />
                    <div className="flex flex-col gap-10 md:w-6/12">
                        <div className="flex flex-row gap-6">
                            <img src="img/support.svg" className="py-2 px-4 lg:my-4 md:my-6 bg-neutral-500 dark:bg-gray-800 rounded-xl dark:invert-0" alt="" />
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold font-sans text-xl dark:text-gray-50 text-gray-950">Customer support</h4>
                                <p className="font-bold text-gray-500 text-sm xl:w-6/12 dark:text-gray-100 md:text-md ">Et nesciunt expedita aut enim obcaecati sit omnis magnam est numquam iure ut  commodi dolorem. Et molestiae </p>

                            </div>
                        </div>
                        <div className="flex flex-row gap-6">
                            <img src="img/goal.svg" className="py-2 px-4 lg:my-4 md:my-6 bg-red-700 dark:bg-red-800 rounded-xl dark:invert-0" alt="" />
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold font-sans text-xl dark:text-gray-50 text-gray-950">Customer support</h4>
                                <p className="font-bold text-gray-500 text-sm xl:w-6/12 dark:text-gray-100 md:text-md ">Et nesciunt expedita aut enim obcaecati sit omnis magnam est numquam iure ut  commodi dolorem. Et molestiae </p>

                            </div>
                        </div>
                        <div className="flex flex-row gap-6">
                            <img src="img/stop.svg" className="py-2 px-4 lg:my-4 md:my-6 bg-neutral-500 dark:bg-gray-800 rounded-xl dark:invert-0" alt="" />
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold font-sans text-xl dark:text-gray-50 text-gray-950">Customer support</h4>
                                <p className="font-bold text-gray-500 text-sm xl:w-6/12 dark:text-gray-100 md:text-md ">Et nesciunt expedita aut enim obcaecati sit omnis magnam est numquam iure ut  commodi dolorem. Et molestiae </p>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className=" flex flex-col gap-10 bg-gray-50 dark:bg-gray-800 px-10 items-center py-10" data-aos="fade-right">
                <div className="flex flex-col text-center gap-2">
                    <h4 className=" text-gray-950 md:text-6xl font-extrabold dark:text-white font-sans text-2xl">Find Web Fleet all around Nigeria</h4>
                    <p className=" text-gray-700 md:w-10/12  mx-auto dark:text-gray-300">Et nesciunt expedita aut enim obcaecati sit omnis magnam est numquam iure ut
                        commodi dolorem. Et molestiae autem ut corrup</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-6/12">
                    <input id="countries" type="text" className="mt-1 px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300" placeholder='i am looking for renting a car'></input>
                    <button
                        id='Search'
                        name='Search'
                        aria-label='Search'
                        className='px-4 py-4 bg-red-700 md:w-4/12 hover:bg-gray-950 hover:border-transparent hover:text-gray-50 dark:bg-red-800 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50    transition ease-in-out  delay-150 duration-300 text-white rounded-lg'>Search</button>
                </div>
                <div id='location' className='location py-4 grid grid-cols-3 md:grid-cols-6 justify-center items-center md:grid-rows-1 gap-10 p-2 md:px-10 lg:px-20'>
                    <h4
                        id='Lagos'
                        name='Lagos'
                        aria-label='Lagos'
                        className={`px-4 py-2   transition ease-in-out text-center  delay-50 duration-150 text-sm md:textmd  rounded-lg ${ProductType === 'lagos' ? 'bg-red-700 text-gray-50' : 'bg-neutral-400'}`}
                        onClick={() => setProductType('lagos')}>Lagos</h4>
                    <h4
                        id='Kano'
                        name='Kano'
                        aria-label='Kano'
                        className={`px-4 py-2   transition ease-in-out text-center  delay-50 duration-150 text-sm md:textmd  rounded-lg ${ProductType === 'kano' ? 'bg-red-700 text-gray-50' : 'bg-neutral-400'}`}
              onClick={() => setProductType('kano')}>Kano</h4>
                    <h4
                        id='Abuja'
                        name='Abuja'
                        aria-label='Abuja'
                        className={`px-4 py-2   transition ease-in-out text-center  delay-50 duration-150 text-sm md:textmd  rounded-lg ${ProductType === 'abuja' ? 'bg-red-700 text-gray-50' : 'bg-neutral-400'}`}
              onClick={() => setProductType('abuja')}>Abuja</h4>
                    <h4
                        id='Warri'
                        name='Warri'
                        aria-label='Warri'
                        className={`px-4 py-2   transition ease-in-out text-center  delay-50 duration-150 text-sm md:textmd  rounded-lg ${ProductType === 'warri' ? 'bg-red-700 text-gray-50' : 'bg-neutral-400'}`}
              onClick={() => setProductType('warri')}>Warri</h4>
                    <h4
                        id='Akure'
                        name='Akure'
                        aria-label='Akure'
                        className={`px-4 py-2   transition ease-in-out text-center  delay-50 duration-150 text-sm md:textmd  rounded-lg ${ProductType === 'akure' ? 'bg-red-700 text-gray-50' : 'bg-neutral-400'}`}
              onClick={() => setProductType('akure')}>Akure</h4>
                    <h4
                        id='calabar'
                        name='calabar'
                        aria-label='calabar'
                        className={`px-4 py-2   transition ease-in-out text-center  delay-50 duration-150 text-sm md:textmd  rounded-lg ${ProductType === 'calabar' ? 'bg-red-700 text-gray-50' : 'bg-neutral-400'}`}
              onClick={() => setProductType('calabar')}>Calabar</h4>

                </div>
                <img src="img/map.svg" alt="map" id="map" name='map' className="scale-125 md:scale-100 dark:opacity-70" aria-label="map" />

            </section>
            <section className=" flex flex-col gap-10 bg-gray-50 dark:bg-gray-800 dark:text-white px-10 items-center py-10" data-aos="fade-right">
                <div className="flex flex-col text-center gap-2">
                    <h4 className=" text-gray-950 md:text-6xl font-extrabold dark:text-white font-sans text-2xl">What people say about us?</h4>
                    <p className=" text-gray-700 w-10/12 xl:w-8/12 mx-auto dark:text-gray-300">Et nesciunt expedita aut enim obcaecati sit omnis magnam est numquam iure ut
                        commodi dolorem. Et molestiae autem ut corrup</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-evenly gap-5 md:gap-20 ">
                    {reviewCard}
                </div>
            </section>
            <section className=" flex flex-col gap-10 px-10 items-center py-10" data-aos="fade-right">
                <div className="flex flex-col text-center gap-2">
                    <h4 className=" text-gray-950 md:text-6xl font-extrabold dark:text-white font-sans text-2xl">Sign up for Newsletter</h4>
                    <p className=" text-gray-700  mx-auto dark:text-gray-300">Et nesciunt expedita aut enim obcaecati sit omnist</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-6/12">
                    <input id="countries" type="email" className="mt-1 px-3 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300" placeholder='michael@ymail.com'></input>
                    <button
                        id='Subscribe'
                        name='Subscribe'
                        aria-label='Subscribe'
                        className='px-4 py-4 bg-red-700 md:w-4/12 hover:bg-gray-950 hover:border-transparent hover:text-gray-50 dark:bg-red-800 dark:text-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-50    transition ease-in-out  delay-150 duration-300 text-white rounded-lg'>Sign up</button>

                </div>

            </section>
            <Footer />
        </div>
    )
}
