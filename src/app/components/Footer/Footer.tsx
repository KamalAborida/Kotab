// components/Footer.tsx
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#1f1f1d] text-white text-sm pt-10 pb-4 px-4 absolute bottom-0 w-full">
      <div className="flex flex-col items-center gap-4">
        {/* Logo */}
        <div className="relative w-[100px] h-[40px]">
          <Image src="/logo.svg" alt="الكتاب" fill className="object-contain" />
        </div>

        {/* Links */}
        <nav className="flex gap-6 font-light">
          <a href="#" className="hover:text-yellow-400">الرئيسية</a>
          <a href="#" className="hover:text-yellow-400">تسجيل الدخول</a>
        </nav>

        {/* Horizontal line */}
        <hr className="w-full max-w-[90%] border-t border-gray-400/30 my-4" />

        {/* Copyright */}
        <span className="text-xs text-gray-400">Copyright</span>
      </div>
    </footer>
  );
};
