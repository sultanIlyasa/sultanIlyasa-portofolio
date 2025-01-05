import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ToolsFrameworkComponent = () => {
  return (
    <div className="">
      <h1 className="text-3xl md:text-4xl dark:text-white text-center my-4">
        Tools and Frameworks
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          <CarouselItem
            id="nextjs"
            className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4 "
          >
            <Image
              src="/carousel/nextjs.png"
              alt="Profile"
              width={0}
              height={0}
              sizes="100vw"
              className=" w-10 h-10 "
            ></Image>
          </CarouselItem>
          <CarouselItem
            id="nestjs"
            className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
          >
            <Image
              src="/carousel/nestjs.png"
              alt="Profile"
              width={0}
              height={0}
              sizes="10vw"
              className=" w-10 h-10 "
            ></Image>
          </CarouselItem>
          <CarouselItem
            id="laravel"
            className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
          >
            <Image
              src="/carousel/laravel.png"
              alt="Profile"
              width={0}
              height={0}
              sizes="10vw"
              className=" w-10 h-10 "
            ></Image>{" "}
          </CarouselItem>
          <CarouselItem
            id="tailwind"
            className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
          >
            <Image
              src="/carousel/tailwind.png"
              alt="Profile"
              width={0}
              height={0}
              sizes="10vw"
              className=" w-10 h-10 "
            ></Image>{" "}
          </CarouselItem>
          <CarouselItem
            id="react"
            className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
          >
            <Image
              src="/carousel/react.png"
              alt="Profile"
              width={0}
              height={0}
              sizes="10vw"
              className=" w-10 h-10 "
            ></Image>{" "}
          </CarouselItem>
          <CarouselItem
            id="postgresql"
            className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
          >
            <Image
              src="/carousel/postgres.png"
              alt="Profile"
              width={0}
              height={0}
              sizes="10vw"
              className=" w-10 h-10 "
            ></Image>{" "}
          </CarouselItem>
          <CarouselItem
            id="prisma"
            className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
          >
            <Image
              src="/carousel/prisma.png"
              alt="Profile"
              width={0}
              height={0}
              sizes="10vw"
              className=" w-10 h-10 "
            ></Image>{" "}
          </CarouselItem>
          <CarouselItem
            id="typescript"
            className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
          >
            <Image
              src="/carousel/typescript.png"
              alt="Profile"
              width={0}
              height={0}
              sizes="10vw"
              className=" w-10 h-10 "
            ></Image>{" "}
          </CarouselItem>
          <CarouselItem
            id="php"
            className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
          >
            <Image
              src="/carousel/php.png"
              alt="Profile"
              width={0}
              height={0}
              sizes="10vw"
              className=" w-10 h-10 "
            ></Image>{" "}
          </CarouselItem>
          <CarouselItem
            id="python"
            className="flex basis-1/4  justify-center items-center mx-2 pl-2 md:pl-4"
          >
            <Image
              src="/carousel/python.png"
              alt="Profile"
              width={0}
              height={0}
              sizes="10vw"
              className=" w-10 h-10 "
            ></Image>{" "}
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-center mx-auto gap-2 mt-9">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default ToolsFrameworkComponent;
