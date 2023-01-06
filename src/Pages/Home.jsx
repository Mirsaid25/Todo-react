import React from "react";
import Item from "../Components/Item";
import { BiMessageSquareAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

function Home({state, dispatch, location}) {
  return (
    <div className="pt-[60px]">
      <div className="flex items-center gap-[15px] flex-wrap m-4">
        {state.arr.map((arr) => (
          <Item key={arr.id} state={arr} dispatch={dispatch} location={location}/>
        ))}
      </div>
      <Link to="/create">
        <button className="cursor-pointer w-[70px] h-[70px] rounded-[100%] bg-[#444444] flex items-center justify-center absolute bottom-[30px] right-[30px]">
          <BiMessageSquareAdd size="30" color="#E2582E" />
        </button>
      </Link>
    </div>
  );
}

export default Home;
