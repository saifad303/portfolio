import Link from "next/link";
import React from "react";

function LinkedIn() {
  return (
    <Link href="https://www.linkedin.com/in/saif-ahmed-1b12a7131/">
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="#CC4B2C"
        className=" cursor-pointer hover:animate-bounce transition duration-300 rounded-full"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
      </svg>
    </Link>
  );
}

export default LinkedIn;
