import React from "react";
import Link from "next/link";

function Facebook() {
  return (
    <Link href="https://www.facebook.com/profile.php?id=100000046092348">
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="#CC4B2C"
        className=" cursor-pointer hover:animate-bounce transition duration-300  rounded-full"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
      </svg>
    </Link>
  );
}

export default Facebook;
