"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal text-right px-1 font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-400 to-secondary-600">
              درود, من مهدی هستم{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "تولید کننده ی نرم افزار",
                2000,
                "تخصص عیب یابی",
                2000,
                "توسعه دهنده وب آپ",
                2000,
                "مدیر فنی تیم نرم افزار",
                2000,
                "فول استک در وب",
                2000,
                "طراح UI/UX",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-justify sm:text-lg mb-6 lg:text-xl">
            من به شما جهت راه اندازی بیزینس آنلاین و ارتقاء کسب و کار فعلی شما مشاوره و کمک میکنم
            شما از طریق شماره 09333744372  می توانید مستقیما تماس حاصل نمایید و یا پیام بگذارید.
          </p>
          <div className="flex gap-2 align-middle">
          <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                درخواست پروژه
              </span>
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                دانلو رزومه من
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/me2.png"
              alt="my image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
