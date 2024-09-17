import React, { useState , useEffect} from "react";
import ToDoHeader from "./Comp/ToDoHeader"
import ToDoList from "./Comp/ToDoList";
import ToDoFooter from "./Comp/ToDoFooter";
import Footer from "./Comp/Footer";
import "./App.css";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('todoData')) || [];
        setData(savedData);
    }, []);

    useEffect(() => {
        localStorage.setItem('todoData', JSON.stringify(data));
    }, [data]);


    return (
        <>
            <h1>To Do</h1>
            <div className="container">
                <ToDoHeader setData={setData} data={data} />
                <ToDoList setData={setData} data={data}  />
                <ToDoFooter setData={setData} data={data} />
            </div>
            <Footer />
        </>
    );
}

export default App;
