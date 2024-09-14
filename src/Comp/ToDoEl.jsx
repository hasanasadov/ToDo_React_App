import React, { useState } from "react";
import xImg from "../assets/x.svg";

function ToDoEl({ id, checked, task, setData, hide }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setData((prev) => prev.filter((el) => el.id !== id));
    };

    const handleChange = () => {
        setData((data) =>
            data.map((el) =>
                el.id === id ? { ...el, checked: !el.checked } : el
            )
        );
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
                    onChange={handleChange}
                />
                <span className={`notchecked ${checked ? "completed" : ""}`}>
                    {task}
                </span>
            </div>
            <button
                className={`deleteBtn ${isHovered ? "show" : ""}`}
                onClick={handleClick}
            >
                <img className="deleteSvg" src={xImg} alt="Delete" />
            </button>
        </li>
    );
}

export default ToDoEl;
