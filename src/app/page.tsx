"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import PlatformGame from "@/components/ui/platform-games";
import Image from "next/image";
import ProfileComponent from "@/components/profile";
import ToolsFrameworkComponent from "@/components/tools-framework";
import TimelineComponent from "@/components/timeline";
import Link from "next/link";
import { useEffect } from "react";

const fadeUpVariant = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const exitAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};
export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const profileSection = document.getElementById("profile");
      if (profileSection) {
        const offset = profileSection.offsetHeight / 2; // 50% of the profile height
        window.scrollTo({
          behavior: "smooth",
        });
      }
    };

    const link = document.querySelector('a[href="#profile"]');
    if (link) {
      link.addEventListener("click", handleScroll);
    }

    return () => {
      if (link) {
        link.removeEventListener("click", handleScroll);
      }
    };
  }, []);
  return (
    <main className="">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
      >
        <div className="min-h-screen flex flex-col items-center justify-center px-4 my-10 py-10">
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Hi!, I&apos;m Sultan 👋
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            I like to build stuff
          </div>
          <Link
            href={"#profile"}
            className="flex items-center justify-center scroll-smooth"
          >
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Get to know me!
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div
          id="profile"
          className="min-h-screen flex flex-col gap-4 items-center justify-center px-4"
        >
          <ProfileComponent />
        </div>
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center px-4 my-10 py-10">
          <ToolsFrameworkComponent />
          <TimelineComponent />
        </div>
      </motion.div>
    </main>
  );
}
