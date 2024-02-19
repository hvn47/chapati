import Image from "next/image";
import React from "react";
import Burger from "@/public/homeImage/burger.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Hero() {
  return (
    <div className="relative pb-24 px-10 bg-[#feeadf] pt-32">
      <div className="max-w-7xl mx-auto relative flex flex-col items-center md:flex-row md:order-1 md:items-start justify-between py-10">
        <div className="flex flex-col items-center md:items-start gap-5 order-2">
          <h1 className="font-extrabold text-4xl text-center max-w-md md:text-start sm:text-5xl md:text-6xl md:max-w-2xl">
            With new hot food you can satisfy the craving of your crew
          </h1>
          <div className="flex flex-col items-start gap-3 py-5 w-60">
            <Button className="w-full" variant="destructive" size="lg">
              order now{" "}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full text-red-500 border-red-500 bg-transparent hover:bg-red-50 hover:text-red-600"
            >
              order now
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image src={Burger} alt="burger" className="w-[400px] md:w-[600px]" />
        </div>
      </div>
      <div className="absolute left-0 right-0 max-w-5xl mx-auto flex flex-wrap sm:flex-nowrap text-center items-center justify-between px-3">
        <Card className=" w-full">
          <CardHeader>
            <CardTitle> ORDER COMPLETED</CardTitle>
            <CardDescription>
              In this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-extrabold text-4xl md:text-6xl">200</p>
          </CardContent>
        </Card>
        <Card className=" w-full">
          <CardHeader>
            <CardTitle> PENDING ORDER</CardTitle>
            <CardDescription>
            In this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-extrabold text-4xl md:text-6xl">31</p>
          </CardContent>
        </Card>
        <Card className=" w-full">
          <CardHeader>
            <CardTitle> CLIENT SATISFIED</CardTitle>
            <CardDescription>
            In this month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-extrabold text-4xl md:text-6xl">99%</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
