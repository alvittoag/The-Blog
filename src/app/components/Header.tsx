import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex item-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://media.cakeresume.com/image/upload/s--pnD0jnTK--/c_fill,g_face,h_300,w_300/v1661949686/kfporkwuqfesh5f0vei8.jpg"
            alt="profile"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <h1>The Blog</h1>
      </div>
      <div>
        <Link
          href="https://github.com/alvittoag"
          className="px-2 py-2 md:px-5 md:py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          This Repository in Github
        </Link>
      </div>
    </header>
  );
};

export default Header;
