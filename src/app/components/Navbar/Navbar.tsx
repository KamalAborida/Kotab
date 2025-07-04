"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavLinkClass } from "./styles";

export const Navbar = () => {
  const pathname = usePathname();

  const disabledPaths = ["/quizes"];

  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "/quizes", label: "الامتحانات" }
  ];

  return (
    <header className="absolute top-0 z-50 w-full px-10 py-4 flex justify-between items-center bg-black/20 text-white text-sm font-light backdrop-blur-md h-[100px]">
      {/* Right: Logo */}
      <div>
        <Image src="/logo.svg" alt="الكتاب" width={300} height={200} className="absolute top-2" />
      </div>

      {/* Left: Nav links */}
      <nav className="flex gap-8 font-medium">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          const isDisabled = disabledPaths.includes(href);

          const classes = getNavLinkClass(isActive, isDisabled);

          if (isDisabled) {
            return (
              <span key={href} title="قريباً" className={classes}>
                {label}
              </span>
            );
          }

          return (
            <Link key={href} href={href} className={classes}>
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="w-[1px] h-6"></div>
    </header>
  );
};
