import Image from "next/image";
import Mobile from "@/public/service/mobile.png";
import Packed from "@/public/service/packed.png";
import Delivery from "@/public/service/delivery2.png";
import Receive from "@/public/service/received.png";

function Service() {
  return (
    <div className="py-44 mt-28 sm:mt-0">
      <div className="max-w-5xl mx-auto flex flex-col gap-16 px-3">
        <h1 className="font-bold text-3xl text-center">Service we Provide</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="h-[320px] relative flex flex-col items-center justify-center">
            <Image src={Mobile} alt="background" className="w-fit" />
            <h1 className="absolute bottom-0 font-bold text-center text-lg md:text-xl w-full">
              Place an order
            </h1>
          </div>
          <div className="h-[320px] relative flex flex-col items-center justify-center">
            <Image src={Packed} alt="background" className="w-full" />
            <h1 className="absolute bottom-0 font-bold text-center text-lg md:text-xl w-full">
              Order preparation
            </h1>
          </div>
          <div className="h-[320px] relative flex flex-col items-center justify-center">
            <Image
              src={Delivery}
              alt="background"
              className="w-full object-cover"
            />
            <h1 className="absolute bottom-0 font-bold text-center text-lg md:text-xl w-full">
              Order Delivery
            </h1>
          </div>
          <div className="h-[320px] relative flex flex-col items-center justify-center">
            <Image src={Receive} alt="background" className="w-full" />
            <h1 className="absolute bottom-0 font-bold text-center text-lg md:text-xl w-full">
              Order received
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
