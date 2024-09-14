import React, { useState } from "react";
import down from "../assets/down.svg";

const Header = ({data, setData }) => {
    const [value, setValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            const inputValue = e.target.value.trim(); 
            if (!inputValue) return; 
            setData((prev) => [
                ...prev,
                { id: Date.now(), value: inputValue, checked: false }, 
            ]);
            setValue(""); 
        }
    };

    const handleClick = (data) => {
        //This is FANTASTICCCCCCCC!!!!
        const allChecked = data.every((el) => el.checked);
        const newData = data.map((el) => ({ ...el, checked: !allChecked }));
        setData(newData);
    };
    

    return (
        <div className="header">
            <button id="doneAll" onClick={()=>handleClick(data)}>
                <img className="doneAllSvg" src={down} alt="" />
            </button>
            <input
                onKeyDown={handleKeyDown}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                id="input"
                placeholder="What needs to be done?"
            />
        </div>
    );
};

export default Header;
