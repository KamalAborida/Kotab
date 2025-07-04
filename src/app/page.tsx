"use client";

import { setUsername } from "@/redux/features/user/userSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const quote = `" من يرد الله به خيرا فقهه في الدين" `;
  const [userName, setUserName] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleStart = () => {
    if (userName !== "") {
      dispatch(setUsername(userName));
      router.push("/quizes");
    }
  };

  return (
    <main className="min-h-screen bg-[url('/home-hero.png')] bg-cover bg-center text-white flex flex-col justify-between pt-60">
      {/* Centered Quote + Buttons */}
      <section className="text-center mb-20">
        <h1 className="text-2xl md:text-4xl font-bold mb-30 text-[70px]">
          {quote}
        </h1>

        <input
          type="text"
          placeholder="اسمك"
          className="bg-transparent border border-white px-4 py-2 rounded-md text-[24px] focus:outline-none mb-10"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <div className="flex justify-center gap-4 text-right rtl">
          <button
            disabled={userName === ""}
            onClick={handleStart}
            className="bg-yellow-500 text-black px-10 py-4 rounded-md font-semibold text-[16px] hover:bg-yellow-400 transition-all duration-200 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-200 hover:cursor-pointer"
          >
            ابدأ الآن
          </button>
        </div>
      </section>
    </main>
  );
}
