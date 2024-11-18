


import { FaGoogle, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer className="pt-10 w-full flex-end bottom-0 bg-gray-950 dark:bg-gray-900  text-gray-100" >
            <div className="relative  ">
                <div className="relative flex  flex-col gap-10">

                    <div className=" px-5 ">
                        <div className="flex flex-col gap-10 lg:gap-60 justify-between lg:flex-row ">
                            <div className="flex flex-col items-center justify-between lg:items-start gap-6 p-2 xl:p-10 lg:w-4/12" >
                                <img src="/img/web-fleet-light.svg" className="" alt="" />
                                <img src="/img/logo-light.svg" className=" " alt="" />
                                <p className=" text-md text-center lg:text-left">Your destination for the best wheel you need.</p>
                                <div className="flex gap-5 flex-row ">
                                    <button className="text-xl p-2 border border-white rounded-full " id='twitter' name='twitter' aria-label='twitter'><FaXTwitter /></button>
                                    <button className="text-xl p-2 border border-white rounded-full " id='google' name='google' aria-label='google'><FaGoogle /></button>
                                    <button className="text-xl p-2 border border-white rounded-full " id='insta' name='insta' aria-label='insta'><FaInstagram /></button>
                                </div>
                                </div>
                            <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 md:gap-20 justify-between my-5 lg:w-8/12 lg:grid-rows-1">
                                <ul className="flex flex-col gap-2  text-left justify-between">
                                    <h4 className="font-extrabold text-xl ">Company</h4>
                                    <li><button className="text-md font-light "> Careers</button></li>
                                    <li><button className="text-md font-light ">About company</button></li>
                                    <li><button className="text-md font-light ">Privacy & notice
                                    </button></li>
                                    <li><button className="text-md font-light "> Terms </button></li>
                                    <li><button className="text-md font-light "> Cookie policy  </button></li>
                                </ul>
                                <ul className="flex flex-col gap-2  text-left justify-between">
                                    <h4 className="font-extrabold text-xl ">Support</h4>
                                    <li><button className="text-md font-light "> How it works</button></li>
                                    <li><button className="text-md font-light ">Pricing</button></li>
                                    <li><button className="text-md font-light "> Help centre</button></li>
                                    <li><button className="text-md font-light "> Mobile app</button></li>
                                    <li><button className="text-md font-light "> Blogs</button></li>
                                </ul>
                                <ul className="flex flex-col gap-2  text-left ">
                                    <h4 className="font-extrabold text-xl ">Offices</h4>
                                    <li><button className="text-md font-light ">Lagos</button></li>
                                    <li><button className="text-md font-light "> Kano</button></li>

                                </ul>

                            </div>
                        </div>

                    </div>
                    <div className="p-4 border-t-2 flex flex-col gap-4 md:flex-row justify-between">
                    <h4 className=" text-md text-center lg:text-left">© 2024 webFleet designed by <a href="https://x.com/zionxi99?s=21">seaweb</a>  and implemented by <a href="https://x.com/photofola">Dev Akintola</a></h4>
                        <div className="flex justify-center flex-row gap-4">
                                    <h4>Privacy & Policy</h4>
                                    <h4>Terms & Condition</h4>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
