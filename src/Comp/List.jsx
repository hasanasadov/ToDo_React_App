import React from "react";
import ToDoEl from "./ToDoEl";

function List({ data, setData }) {
    return (
        <ul id="list">
            {data.map((el) => (
                <ToDoEl
                    key={el.id}
                    checked={el.checked}
                    id={el.id}
                    task={el.value}
                    setData={setData}
                    hide={el.hide}
                    className={el.hide ? "hide" : ""}
                />
            ))}
        </ul>
    );
}

export default List;
