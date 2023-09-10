import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex h-12 items-center justify-between p-4 text-red-500 md:h-24 lg:px-20 xl:px-40">
      <Link href="/" className="text-lg font-bold">
        MASSIMO
      </Link>
      <p>© All RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
