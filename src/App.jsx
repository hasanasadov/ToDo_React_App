import React, { useState , useEffect} from "react";
import Header from "./Comp/Header";
import List from "./Comp/List";
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
                <Header setData={setData} data={data} />
                <List setData={setData} data={data} />
                <Footer setData={setData} data={data} />
            </div>
            <footer>
                <p>Click to edit a todo</p>
                <p>
                    Created by{" "}
                    <a href="https://github.com/hasanasadov/">
                        {" "}
                        Hasanali Asadov{" "}
                    </a>
                </p>
                <a href="https://github.com/hasanasadov/ToDo_React_App">
                    Source Code
                </a>
            </footer>
        </>
    );
}

export default App;
