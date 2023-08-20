import React, { useState, useEffect } from "react";
import {AiOutlineSearch} from 'react-icons/ai';
import {RiCoinsFill} from 'react-icons/ri'
import {BsFillCartFill} from "react-icons/bs";
// import Wrapper from "./Wrapper";

import Link from "next/link";
// import Menu from "./Menu";
// import MenuMobile from "./MenuMobile";

import { CiDeliveryTruck } from "react-icons/ci"
import { BiMenuAltRight, BiSolidCoinStack } from "react-icons/bi";
// import { VscChromeClose } from "react-icons/vsc";

// import Connectbutton from "./Connectbutton"; 
import { useAccount } from "wagmi";

const Header = () => {
    const {address} = useAccount();

    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const userinfo = localStorage.getItem("userInfo");

    const handleLogout = () => {

        localStorage.removeItem("userInfo");
        window.location.reload()
        
    }

    return (
        <header className={`text-white h-[56px] flex justify-center items-center gap-10 bg-[#2874f0] px-4 py-0 transition-transform duration-300 ${show}`}>
            <div className=" relative top-[5px]">
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" width={"75px"}/>
                <p className="relative top-[-2px] left-[30px] text-[15px] text-[#ffe500] font-extrabold">Unstop</p>
            </div>

            <div className="flex relative justify-between bg-white p-[8px] mx-px-[40px] w-full h-[36px] max-w-[564px]">
                <input className="mx-px-[10px] w-11/12 border-none outline-none text-[15px] text-black" type="text" placeholder="Search for products brands and more" />
                <AiOutlineSearch className=" text-[#2874f0] text-[20px]" />
            </div>

            {!userinfo
            ?<Link href='/login'><button className="text-[#2874f0] text-[16px] font-medium bg-white cursor-pointer rounded-sm h-[32px] py-[5px] px-[40px] border border-solid border-[#dbdbdb]"> Login </button></Link>
            :<button onClick={handleLogout} className="text-[#2874f0] text-[16px] font-medium bg-white cursor-pointer rounded-sm h-[32px] py-[5px] px-[40px] border border-solid border-[#dbdbdb]"> Logout </button>
            }

            {/* <Link href='/login'><button className="text-[#2874f0] text-[16px] font-medium bg-white cursor-pointer rounded-sm h-[32px] py-[5px] px-[40px] border border-solid border-[#dbdbdb]"> Login </button></Link> */}
            <div className="cart flex gap-2">
                <BsFillCartFill className="text-white text-[20px]" />
                <span className="text-white text-[20px] font-medium">Cart</span>
            </div>

            {userinfo

            
            ?<div className="flex gap-3">
            {/* Icon start */}
                    <Link href="/user/supercoin">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <RiCoinsFill className="text-[19px] md:text-[24px]" />
                            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                51
                            </div>
                        </div>
                    </Link>
                    {/* Icon end */}

                    {/* Icon start */}
                    <Link href="/user/order-history">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <CiDeliveryTruck className="text-[15px] md:text-[20px]" />
                            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            5
                            </div>
                        </div>
                    </Link>
                    {/* Icon end */}
            </div>
            :null
            }

            {/* <Wrapper className="h-[60px] flex justify-between items-center">
                <Link href="/" className="flex">
                    <img src="/root1.png" className="w-[20px] md:w-[30px]" />
                    <span className="font-medium">Kart</span>
                </Link>

                <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                />

                {mobileMenu && (
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                    />
                )}

                <div className="flex items-center gap-2 text-white"> */}
                    {/* Icon start */}
                    {/* <Link href="/user/supercoin">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <BiSolidCoinStack className="text-[19px] md:text-[24px]" />
                            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                                51
                            </div>
                        </div>
                    </Link> */}
                    {/* Icon end */}

                    {/* Icon start */}
                    {/* <Link href="/user/order-history">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <CiDeliveryTruck className="text-[15px] md:text-[20px]" />
                            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            5
                            </div>
                        </div>
                    </Link> */}
                    {/* Icon end */}

                    {/* Mobile icon start */}
                    {/* <div className="w-8md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <VscChromeClose
                                className="text-[16px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenuAltRight
                                className="text-[20px]"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div> */}
                    {/* Mobile icon end */}
                    {/* <div>
                        <Connectbutton address={address}/>
                    </div>
                </div>
            </Wrapper> */}
        </header>
    );
};

export default Header;
