import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#feeadf]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:items-start justify-between px-10 py-20">
        <div>
          <ul className="flex flex-col gap-2 font-bold">
            <li>ABOUT US</li>
            <li>ADVERTISE</li>
          </ul>
        </div>
        <div>
        <ul className="flex flex-col gap-2 font-bold">
            <li>PRIVACY POLICY</li>
            <li>TERM AND CONDITIONS</li>
            <li>FAQ</li>
            <li>CONTACT US</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">SUBSCRIBE TO OUR DAILY NEWSLETTER</h1>
          <Input type="email" placeholder="Email" className='border border-gray-400'/>
          <Button className='bg-red-500 hover:bg-red-600'>Submit</Button>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
