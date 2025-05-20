import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function CarouselComponent() {
  return (
    <div>
      <Carousel
        opts={{
        align: "start",
      }}
      // orientation="vertical"
      className="xl:w-[600px] md:w-[400px] h-auto w-[200px] transition-all duration-300 "
      >
        <CarouselContent className="-mt-1 ">
          {
            Array(7).fill(1).map(()=> <CarouselItem className="pt-1 flex justify-center" >
            <div className="rounded-2xl overflow-hidden  ">
              <Image className="h-auto w-auto" src={'/images/logo.png'} alt="image" height={350} width={350}/>
            </div>
          </CarouselItem>
            )
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
