import React, { useState, useRef } from "react";
import { Pencil, Trash } from "lucide-react";

function ToDoEl({ id, checked, task, hide, handleAction }) {
  const [isHovered, setIsHovered] = useState(false);
  const [clickOnEdit, setClickOnEdit] = useState(false);
  const [inputValue, setInputValue] = useState(task);
  let inputRef = useRef();

  //! ------------------ HOVER ------------------ !//
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    if (window.matchMedia("(max-width: 500px)").matches) {
      setClickOnEdit(false);
    }
    setIsHovered(false);
  };

  //! ------------------ Set States ------------------ !//
  const handleEditClick = () => {
    setClickOnEdit(true);
  };

  //! ------------------  Handle Actions ------------------ !//
  const handleTrashClick = () => {
    setClickOnEdit(false);
    handleAction("delete", id);
  };
  const handleCheckChange = () => {
    handleAction("check", id);
  };
  const handleEditKeyDown = (e) => {
    if (e.key === "Enter") {
      let newInputValue = inputRef.current.value;
      handleAction("edit", id, newInputValue);
      setClickOnEdit(false);
    }
  };

  return (
    <li
      className={"liItem " + (hide ? "hide" : "")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="li-left">
        <input
          className="toggle"
          type="checkbox"
          checked={checked}
          onChange={handleCheckChange}
        />
        {clickOnEdit ? (
          <input
            onKeyDown={handleEditKeyDown}
            ref={inputRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className="w-full outline-none  overflow-auto"
          />
        ) : (
          <span className={`${checked ? "completed" : ""}`}>{inputValue}</span>
        )}
      </div>
      <Trash
        className={`cursor-pointer deleteBtn mr-2 ${
          isHovered ? `show` : "opacity-10"
        }`}
        size={25}
        color={"red"}
        onClick={handleTrashClick}
      />
      <Pencil
        className={`cursor-pointer mr-[15px] ${
          isHovered ? `show` : "opacity-10"
        }`}
        size={25}
        color={"green"}
        onClick={handleEditClick}
      />
    </li>
  );
}

export default ToDoEl;
