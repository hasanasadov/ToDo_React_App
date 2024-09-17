import React from "react";
import ToDoEl from "./ToDoEl";

function List({ data, setData }) {
  const handleAction = (action, id, newValue) => {
    switch (action) {
      case "delete":
        setData((prev) => prev.filter((el) => el.id !== id));
        break;
      case "edit":
        console.log(newValue);
        setData((prev) =>
          prev.map((el) => (el.id === id ? { ...el, value: newValue } : el))
        );
        
        break;
      case "check":
        setData((prev) =>
          prev.map((el) =>
            el.id === id ? { ...el, checked: !el.checked } : el
          )
        );
        break;
      default:
        console.warn("Unhandled action :", action);
    }
  };
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
          handleAction={handleAction}
          className={el.hide ? "hide" : ""}
        />
      ))}
    </ul>
  );
}

export default List;
