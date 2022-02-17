import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { demos } from "./demoProjectLinks";

////320 w
///167 h

function DemoProjects() {
  const {
    hulu,
    youtube,
    facebook,
    freshytaAdmin,
    freshytaLanding,
    table,
    git,
    cityRide,
    landingPage,
  } = demos;
  const router = useRouter();
  return (
    <div className="bg-[#FFF9F9] flex flex-col w-full pt-7 pl-5">
      <h3 className=" text-xl text-[#CC4B2C] italic font-medium mb-3">
        These are some demo projects that I have made so far.
      </h3>
      <div className="self-center pl-4 pb-3 w-[93%] h-[88%] border-2 border-[#FFE2D9] rounded-md overflow-y-auto scrollbar scrollbar-thumb-orange-500 scrollbar-track-transparent">
        <button
          className=" max-w-xs rounded overflow-hidden shadow-lg text-left mr-4 mt-3 bg-white"
          onClick={() => router.push(hulu)}
        >
          <img
            src="/demo/hulu.png"
            alt="Sunset in the mountains"
            className="w-[320px] h-[167px]"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl">Hulu demo</div>
          </div>
          <div className="px-6 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #NextJS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tailwindcss
            </span>
          </div>
        </button>
        <button
          className=" max-w-xs rounded overflow-hidden shadow-lg text-left mr-4 mt-3 bg-white"
          onClick={() => router.push(youtube)}
        >
          <img
            src="/demo/youtubeDemo.png"
            alt="Sunset in the mountains"
            className="w-[320px] h-[167px]"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl">youtube demo</div>
          </div>
          <div className="px-6 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #NextJS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tailwindcss
            </span>
          </div>
        </button>
        <button
          className=" max-w-xs rounded overflow-hidden shadow-lg text-left mr-4 mt-3 bg-white"
          onClick={() => router.push(facebook)}
        >
          <img
            src="/demo/facebook.png"
            alt="Sunset in the mountains"
            className="w-[320px] h-[167px]"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl">facebook demo</div>
          </div>
          <div className="px-6 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #NextJS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tailwindcss
            </span>
          </div>
        </button>
        <button
          className=" max-w-xs rounded overflow-hidden shadow-lg text-left mr-4 mt-3 bg-white"
          onClick={() => router.push(freshytaAdmin)}
        >
          <img
            src="/demo/admin.png"
            alt="Sunset in the mountains"
            className="w-[320px] h-[167px]"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl">freshyta admin</div>
          </div>
          <div className="px-6 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #React
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tailwindcss
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Firebase
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #cloudinary
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #formik
            </span>
          </div>
        </button>
        <button
          className=" max-w-xs rounded overflow-hidden shadow-lg text-left mr-4 mt-3 bg-white"
          onClick={() => router.push(freshytaLanding)}
        >
          <img
            src="/demo/freshytaDemo.png"
            alt="Sunset in the mountains"
            className="w-[320px] h-[167px]"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl">freshyta landing</div>
          </div>
          <div className="px-6 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #React
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tailwindcss
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Firebase
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #cloudinary
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #formik
            </span>
          </div>
        </button>
        <button
          className=" max-w-xs rounded overflow-hidden shadow-lg text-left mr-4 mt-3 bg-white"
          onClick={() => router.push(table)}
        >
          <img
            src="/demo/table.png"
            alt="Sunset in the mountains"
            className="w-[320px] h-[167px]"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl">Responsive table</div>
          </div>
          <div className="px-6 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #NextJS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tailwindcss
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #NextAuth
            </span>
          </div>
        </button>
        <button
          className=" max-w-xs rounded overflow-hidden shadow-lg text-left mr-4 mt-3 bg-white"
          onClick={() => router.push(cityRide)}
        >
          <img
            src="/demo/cityride.png"
            alt="Sunset in the mountains"
            className="w-[320px] h-[167px]"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl">city Ride</div>
          </div>
          <div className="px-6 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #React
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tailwindcss
            </span>
          </div>
        </button>
        <button
          className=" max-w-xs rounded overflow-hidden shadow-lg text-left mr-4 mt-3 bg-white"
          onClick={() => router.push(git)}
        >
          <img
            src="/demo/git.png"
            alt="Sunset in the mountains"
            className="w-[320px] h-[167px]"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl">Git repo page demo</div>
          </div>
          <div className="px-6 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #React
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tailwindcss
            </span>
          </div>
        </button>
        <button
          className=" max-w-xs rounded overflow-hidden shadow-lg text-left mr-4 mt-3 bg-white"
          onClick={() => router.push(git)}
        >
          <img
            src="/demo/landing.png"
            alt="Sunset in the mountains"
            className="w-[320px] h-[167px]"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl">Git repo page demo</div>
          </div>
          <div className="px-6 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #VanilaJS
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Tailwindcss
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default DemoProjects;
