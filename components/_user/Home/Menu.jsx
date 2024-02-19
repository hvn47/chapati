import Image from "next/image";
import BurgerMenu from '@/public/menuImage/burgerMenu.png'
import PizzaMenu from '@/public/menuImage/pizzaMenu.png'
import ChickenMenu from '@/public/menuImage/chickenMenu.png'
import SandwichMenu from '@/public/menuImage/sandwichMenu.png'
import TibsMenu from '@/public/menuImage/tibsMenu.png'


const Menu = () => {
  return (
    <div className="bg-[#feeadf] py-20">
      <div className="flex flex-col gap-16">
        <h1 className="text-center font-bold text-2xl">Our Top Menu</h1>
        <div className="grid grid-cols-3 md:grid-cols-6 items-center justify-between max-w-3xl mx-auto w-full px-3">
          <div className="flex flex-col gap-2 items-center justify-center hover:bg-red-500 p-5 cursor-pointer rounded-lg hover:text-white">
            <Image src={BurgerMenu} alt="menu" className="w-[100px]"/>
            <h1 className="font-extrabold">Burger</h1>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center hover:bg-red-500 p-5 cursor-pointer rounded-lg hover:text-white">
            <Image src={PizzaMenu} alt="menu" className="w-[100px]"/>
            <h1 className="font-extrabold">Pizza</h1>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center hover:bg-red-500 p-5 cursor-pointer rounded-lg hover:text-white">
            <Image src={ChickenMenu} alt="menu" className="w-[100px]"/>
            <h1 className="font-extrabold">Chicken</h1>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center hover:bg-red-500 p-5 cursor-pointer rounded-lg hover:text-white">
            <Image src={SandwichMenu} alt="menu" className="w-[100px]"/>
            <h1 className="font-extrabold">Sandwich</h1>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center hover:bg-red-500 p-5 cursor-pointer rounded-lg hover:text-white">
            <Image src={TibsMenu} alt="menu" className="w-[100px]"/>
            <h1 className="font-extrabold">Tibs</h1>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center hover:bg-red-500 p-5 cursor-pointer rounded-lg hover:text-white">
            <Image src={TibsMenu} alt="menu" className="w-[100px]"/>
            <h1 className="font-extrabold">Tibs</h1>
          </div>
        </div>
        <div className="max-w-7xl mx-auto bg-[#ffffff] rounded-2xl p-10 w-full">
            menu list
        </div>
      </div>
    </div>
  );
};

export default Menu;
