import React from "react";
import Link from "next/link";

function Gmail() {
  return (
    <Link href="mailto:saifad303@gmail.com">
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="#CC4B2C"
        className=" cursor-pointer hover:animate-bounce transition duration-300   rounded-full"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.001 16.917c.552 0 .999-.448.999-.999v-7.919c0-.551-.448-.999-.999-.999h-12.002c-.551 0-.999.448-.999.999v7.919c0 .551.448.999.999.999h12.002zm-6.001-3.55l-5.45-3.782-.011 6.748h10.899v-6.748l-5.438 3.782zm5.174-5.784c-1.527 1.064-5.174 3.634-5.174 3.634l-5.203-3.634h10.377z" />
      </svg>
    </Link>
  );
}

export default Gmail;
