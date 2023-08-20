"use client";


import Link from "next/link"
import { useEffect, useState } from "react";
import "../../style/page.css";
import Header from "@/components/Header";
import HomeImg from "../../assets/Images/homeimg.png"
import Image from "next/image";
import UserHome from "./user/page.js";

export default function Home() {
  
  const [userInfo, setUserInfo] = useState(null);

  // Use useEffect to retrieve userInfo from localStorage
  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userInfo");
    if (userInfoFromStorage) {
      setUserInfo(JSON.parse(userInfoFromStorage));
    }
    // console.log(JSON.parse(userInfoFromStorage).data);
  }, []);
  return (
    <>
    <Header/>
      <div className="bg-white min-h-screen flex flex-col justify-center items-center">
        {!userInfo
        ?<div className="text-balck text-center animate-fade-in-down text_box">
          <Image className="w-[500px]" src={HomeImg}/>
          <h1 className="text-4xl font-bold mt-[-50px]">Welcome to Our Website</h1>
        </div>
        :<UserHome/>
        }
      </div>
    </>
    );
}