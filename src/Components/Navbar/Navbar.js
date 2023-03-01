import React, { useState } from 'react';
import 'flowbite';
import flag from '../asset/flag.png';
import bdFlag from '../asset/bd img.png';
import ostadLogo from '../asset/ostad logo.png';
import './Navbar.css'
import Banner from '../Banner/Banner';
import Carosel from '../Carosel/Carosel';
import AppDesign from '../AppDesign/AppDesign';
import Workshop from '../Workshop/Workshop';
import Appdesignresponsive from '../Appdesignresponsive/Appdesignresponsive';
import Workshopres from '../Workshopres/Workshopres';
import VideoResource from '../VideoResourse/VideoResource';
import FreeResourceres from '../FreeresourceRes/FreeResourceres';
import Join from '../../Join/Join';
import Joinres from '../../Join/Joinres';
import Career from '../Career/Career';
import CareerMobile from '../Career/CareerMobile';
import CompanySupply from '../CopamySupply/CompanySupply';
import CarerrGuideline from '../CarrerGuideline/CarerrGuideline';
import Mobile from '../CarrerGuideline/Mobile';
import Companymobile from '../Companymobile';

const Navbar = () => {
    const [showFlag, setShowflag] = useState(false);

    function handleClick() {
        setShowflag(!showFlag);
    }


    return (
        <div className='w-full bg-[#F9F9FA]'>


<div className='w-full bg-[#FFFFFF]'>
<nav className=" lg:w-[1240px] w-full h-[70px] lg:mx-auto   lg:h-[72px] bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="container flex flex-wrap  items-center justify-between mx-auto">
                    <a href="#" className="flex items-center">
                        <img src={ostadLogo} className="h-6 mr-3 sm:h-10 ml-2 lg:ml-0" alt="Flowbite Logo" />
                        <span className="self-center text-3xl   font-bold whitespace-nowrap text-black ">Ostad </span>
                    </a>
                    <button type="button" className="text-black font-semibold uppercase ml-[20px] rounded bg-[#FFCD33] lg:hidden block  w-[61px] h-[36px]">Login</button>
                    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex mr-2 items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto z-50 " id="navbar-multi-level">
                        <ul className="flex flex-col items-center p-4 lg:p-0 mt-4 border z-50 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                            <li className='z-50'>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center text-xs font-semibold border-bottom justify-between w-full h-[72px]  py-2 pl-3 pr-4  ">সেট ইয়োর গোল<svg className="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbar" className="z-50 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm z-50 text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li className='z-50' aria-labelledby="dropdownNavbarLink">
                                            <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
                                            <div id="doubleDropdown"  className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                                <ul   className="py-2 text-sm text-gray-700 z-50 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My downloads</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul> 
                                </div>
                            </li>
                            <li>
                                <button className="block py-2 pl-3 w-full h-[72px] border-bottom pr-4 text-gray-700  text-xs font-semibold">আপকামিং লাইভ ব্যাচ</button>
                            </li>
                            <li>
                                {
                                    showFlag ? <button onClick={handleClick} className='flex items-center border-bottom w-full h-[72px]'>
                                        <img src={flag} className="mr-[8px]" alt="" />
                                        <span className='text-xs font-semibold'>English</span>
                                    </button> : <button onClick={handleClick} className={`flex items-center border-bottom w-full h-[72px]`}>
                                        <img src={bdFlag} className="mr-[8px] " alt="" />
                                        <span className='text-xs font-semibold'>বাংলা</span>
                                    </button>
                                }

                            </li>
                            <li>
                                <button style={{ border: "1px solid #FFC000" }} type="button" className="text-black uppercase   font-semibold rounded hover:bg-[#FFE699]  w-[89px] h-[39px] bg-[#FFFBEE]">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
</div>

            <Banner />
            <Carosel />
            <AppDesign />
            <Workshop />
            <Appdesignresponsive />
            <Workshopres/>
            <VideoResource/>
            <FreeResourceres/>
            <Join/>
            <Joinres/>
            <Career/>
            <CareerMobile/>
            <CompanySupply/>
            <Companymobile/>
            <CarerrGuideline/>
            <Mobile/>

        </div>
    );
};

export default Navbar;