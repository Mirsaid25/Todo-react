import React from "react";
import { BiExit } from "react-icons/bi";
import { MdOutlineSaveAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function CreateToDo({ dispatch, location }) {
  const submit = (e) => {
    e.preventDefault();

    let info = {
      id: uuidv4(),
    };

    let formData = new FormData(e.target);

    formData.forEach((value, key) => {
      info[key] = value;
    });

    dispatch({
      type: "added",
      payload: info,
    });

    location.pathname = "/";
  };

  return (
    <div>
      <form
        name="form"
        onSubmit={submit}
        className="pt-[65px] flex flex-col items-center gap-4 justify-center"
      >
        <label htmlFor="1" className="text-white text-xl font-[500]">
          Task Name
        </label>
        <input
          required
          name="name"
          type="text"
          id="1"
          className="w-[50%] outline-none p-3 rounded-[5px] bg-[#8c8c8c] text-white"
        />

        <label htmlFor="2" className="text-white text-xl font-[500]">
          Task Note
        </label>

        <textarea
          required
          name="note"
          id="2"
          cols="30"
          rows="30"
          className="bg-[#8c8c8c] w-[50%] outline-none p-5 rounded-[5px] text-white"
        ></textarea>
        <button
          type="submit"
          className="cursor-pointer w-[70px] h-[70px] rounded-[100%] bg-[#444444] flex items-center justify-center fixed bottom-[30px] right-[110px]"
        >
          <MdOutlineSaveAlt size="30" color="#E2582E" />
        </button>
      </form>
      <Link to="/">
        <button className="cursor-pointer w-[70px] h-[70px] rounded-[100%] bg-[#444444] flex items-center justify-center fixed bottom-[30px] right-[30px]">
          <BiExit size="30" color="#E2582E" />
        </button>
      </Link>
    </div>
  );
}

export default CreateToDo;
