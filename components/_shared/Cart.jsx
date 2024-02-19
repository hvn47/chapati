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
import { PiShoppingCartSimple } from "react-icons/pi";


export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="icon">
          <PiShoppingCartSimple size={22} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div>this is cart</div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
