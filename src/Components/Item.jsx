import React, { useState } from "react";
import { MdDelete, MdOutlineSaveAlt } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { Link } from "react-router-dom";
import { BiExit } from "react-icons/bi";

const ChangeTodo = ({ setModal, state, dispatch }) => {
  const submitChange = (e) => {
    e.preventDefault();

    let info = {};

    let formData = new FormData(e.target);

    formData.forEach((value, key) => {
      info[key] = value;
    });

    dispatch({
      type: "Change",
      payload: info,
      id: state.id
    });

    setModal(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-black z-10">
      <form
	    onSubmit={(e) => submitChange(e)}
        name="form2"
        className="pt-[65px] flex flex-col items-center gap-4 justify-center"
      >
        <label htmlFor="1" className="text-white text-xl font-[500]">
          New task Name
        </label>
        <input
          required
          name="name"
          type="text"
          placeholder={state.name}
          id="1"
          className="w-[50%] outline-none p-3 rounded-[5px] bg-[#8c8c8c] text-white"
        />

        <label htmlFor="2" className="text-white text-xl font-[500]">
          New task Note
        </label>

        <textarea
          required
          placeholder={state.note}
          name="note"
          id="2"
          cols="20"
          rows="30"
          className="bg-[#8c8c8c] w-[50%] outline-none p-5 rounded-[5px] text-white"
        ></textarea>
        <button
          className="cursor-pointer w-[70px] h-[70px] rounded-[100%] bg-[#444444] flex items-center justify-center fixed bottom-[30px] right-[110px]"
        >
          <MdOutlineSaveAlt size="30" color="#E2582E" />
        </button>
      </form>
      <button
        onClick={(e) => setModal(false)}
        className="cursor-pointer w-[70px] h-[70px] rounded-[100%] bg-[#444444] flex items-center justify-center fixed bottom-[30px] right-[30px]"
      >
        <BiExit size="30" color="#E2582E" />
      </button>
    </div>
  );
};

function Item({ state, dispatch }) {
  const [modal, setModal] = useState(false);

  function deleteTask() {
    dispatch({
      type: "DELETE",
      id: state.id,
    });
  }

  function setModalFn() {
    setModal(true);
  }

  return (
    <div className="w-[200px] pb-3 flex items-center flex-col gap-1 relative">
      <div className="bg-[#444444] p-2 pt-5 text-white rounded-[10px] h-[250px] w-full">
        <p>{state.note}</p>
      </div>
      <h2 className="text-xl font-bold text-white text-center">{state.name}</h2>
      <span className="text-[#a7a7a7] font-[500]">20 дек.</span>
      <MdDelete
        color="white"
        onClick={(e) => deleteTask()}
        className="absolute right-2 top-2 cursor-pointer"
      />
      <GoPencil
        onClick={(e) => setModalFn()}
        color="white"
        className="absolute right-7 top-2 cursor-pointer"
      />
      {modal ? (
        <ChangeTodo setModal={setModal} state={state} dispatch={dispatch} />
      ) : null}
    </div>
  );
}

export default Item;
