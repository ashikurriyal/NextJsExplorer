"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {

    const pathName = usePathname()
    const router = useRouter()
    const links = [
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Services",
            path: '/services'
        },
        {
            title: "Contact",
            path: '/contacts'
        },
        {
            title: "Blogs",
            path: '/blogs'
        },
    ]

    const handlr = () => {
        router.push('/about')
    }
  return (
    <div>
      <nav className="bg-slate-200 px-6 py-4 text-xl font-semibold flex justify-between items-center">
        <h6 className="">Learn <span className="text-teal-600">Next.js</span></h6>
        <ul className="flex justify-between items-center space-x-4">
          {
            links?.map((link) => <Link className={`${pathName === link.path && "border-b-4 border-teal-600"}`} key={link.path} href={link.path}>{link.title}</Link>)
          }
        </ul>
        <button onClick={handlr} className="bg-teal-600 px-6 py-4 rounded-xl text-white">Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
