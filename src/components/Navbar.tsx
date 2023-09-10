import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Navbar = () => {
  return (
    <div className="flex h-12 items-center justify-between border-b-2 border-b-red-500 p-4 uppercase text-red-500 md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden flex-1 gap-4 md:flex">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="flex-1 text-xl md:text-center md:font-bold">
        <Link href="/">Massimo</Link>
      </div>
      {/*MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
        <div className="r-2 top-3 flex cursor-pointer items-center gap-2 rounded-md bg-orange-300 px-1 md:absolute lg:static">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
