import {
  Search,
  Moon,
  ShoppingBasketIcon,
  Bell,
  Bookmark,
  SettingsIcon,
} from "lucide-react";
import Avatar from "../../../assets/man.png";
import Lang from "../../../assets/united-kingdom.png";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center gap-9 mr-7 cursor-pointer">
      <Image src={Lang} alt="language" className=" object-contain w-5" />
      <Search size={18} />
      <Moon size={18} />
      <ShoppingBasketIcon size={18} />
      <Bell size={18} />
      <Bookmark size={18} />
      <Image src={Avatar} alt="Avatar" className=" object-contain w-6" />
      <SettingsIcon size={18} />
    </div>
  );
};

export default Header;
