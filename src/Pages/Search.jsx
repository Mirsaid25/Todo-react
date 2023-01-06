import { Link } from "react-router-dom";
import React, { useState } from "react";
import { BiExit } from "react-icons/bi";
import Item from "../Components/Item";

function Search({state, dispatch}) {
	const [result, setResult] = useState([])

	function InputValue(e) {
		let filtered =  state.arr.filter(item=> {
			if(e.target.value.length >0 && item.name.includes(e.target.value)){
				return item
			}
		})
		setResult(filtered)
	}

  return (
    <div className="pt-[60px]">
      <div className="flex items-center justify-center">
        <input
		  onChange={InputValue}
          type="text"
          placeholder="Введите название"
          className="w-60 outline-none p-1 px-4 rounded-[15px] bg-transparent text-white border-solid border-2 border-[white]"
        />
      </div>
      <div className="flex items-center gap-[15px] flex-wrap m-4">
		{
			result.length >0 ? result.map((item)=>(
			<Item state={item} dispatch={dispatch}/>)):
			<h1 className="text-white">Ничего не найденно</h1>
		}
      </div>
      <Link to="/">
        <button className="cursor-pointer w-[70px] h-[70px] rounded-[100%] bg-[#444444] flex items-center justify-center fixed bottom-[30px] right-[30px]">
          <BiExit size="30" color="#E2582E" />
        </button>
      </Link>
    </div>
  );
}

export default Search;
