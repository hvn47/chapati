import { Cart } from "@/components/_shared/Cart";
import { Drawer } from "@/components/_shared/Drawer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { TbUser } from "react-icons/tb";

export default function Nav() {
  return (
    <header className="absolute top-0 z-50 w-full h-[5.5rem] py-6 bg-transparent">
      <nav className="flex items-center justify-between max-w-7xl mx-auto py-2 xl:px-0 px-3">
        <div className="font-extrabold text-2xl inline-flex items-center">
          <Drawer />
          <div className="flex">
            <span>CHAPATI</span>
            <span className="text-[10px]">BBQ</span>
          </div>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center gap-4">
            <Link href={"/menu"}>
              <Button variant="ghost" className="text-md font-semibold hover:text-red-500 hover:bg-transparent">
                Menu
              </Button>
            </Link>
            <Link href={"/menu"}>
              <Button variant="ghost" className="text-md font-semibold hover:text-red-500 hover:bg-transparent">
                Service
              </Button>
            </Link>
            <Link href={"/menu"}>
              <Button variant="ghost" className="text-md font-semibold hover:text-red-500 hover:bg-transparent">
                Contact Us
              </Button>
            </Link>
          </ul>
        </div>
        <div className="flex items-center">
          <Cart />
          <Button variant="icon">
            <TbUser size={22} />
          </Button>
        </div>
      </nav>
      <Separator className="max-w-7xl mx-auto mt-2" />
    </header>
  );
}
