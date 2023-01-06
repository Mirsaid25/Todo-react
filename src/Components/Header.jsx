import React from "react";
import { IoMenu } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header({ location }) {
  return (
    <header className="bg-black w-full flex items-center justify-between p-[15px] fixed left-[0] top-[0] ">
      <div className="flex items-center gap-[15px]">
        <IoMenu size="30" color="white" className="cursor-pointer" />
        {location === "/" ? (
          <h2 className="text-white text-[20px] font-bold">Все заметки</h2>
        ) : null}
        {location === "/create" ? (
          <h2 className="text-white text-[20px] font-bold">Новая заметка</h2>
        ) : null}
		{location === "/search" ? (
          <h2 className="text-white text-[20px] font-bold">Поиск</h2>
        ) : null}
      </div>
      <div className="flex items-center gap-[15px]">
        {location === "/"
          ? [
              <Link to="/search">
                <BiSearch size="27" color="white" className="cursor-pointer" />
              </Link>,
              <BsThreeDotsVertical
                size="27"
                color="white"
                className="cursor-pointer"
              />,
            ]
          : null}
      </div>
    </header>
  );
}

export default Header;
