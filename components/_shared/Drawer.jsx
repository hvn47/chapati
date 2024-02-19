import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { RiMenu2Fill } from "react-icons/ri";

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="icon" className='flex md:hidden'>
          <RiMenu2Fill size={20}/>
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle className='text-start text-2xl'>CHAPATI</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 text-xl py-10">
            <ul>Menu</ul>
            <ul>Service</ul>
            <ul>Contact Us</ul>
        </div>
        <SheetFooter>

        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
