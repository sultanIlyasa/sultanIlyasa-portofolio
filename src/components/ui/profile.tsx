import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

const ProfileComponent = () => {
  return (
    <div className="mx-20 flex flex-col items-center justify-center lg:flex-row gap-4 ">
      <Image
        src="/profile-pic.jpg"
        alt="Profile"
        width={0}
        height={0}
        sizes="100vw"
        className="rounded-full w-[80%] h-[50%] md:w-[30%] md:h-[50%] xl:w-[20%] xl:h-[30%] object-cover"
      ></Image>

      <div className="mx-auto">
        <Card className="min-w-[200px]">
          <CardHeader>
            <CardTitle>
              {" "}
              <h1 className="text-base md:text-3xl font-bold text-center lg:text-left">
                Sultan Ali Ilyasa
              </h1>
              <p className="text-xs md:text-base text-center lg:text-left">
                Software Engineer
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p className="text-xs md:text-base lg:text-left">
                I&apos;m a 4th-year Computer Science student passionate about
                software engineering and ML-driven business solutions. With
                experience in teaching, website management, and national
                competitions, I excel at bridging technology and business to
                create impactful, sustainable solutions.
              </p>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileComponent;
