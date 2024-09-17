import React from "react";

const Footer = ({ data, setData }) => {
    const count = (data) => {
        return data.filter((el) => !el.checked).length;
    };

    const handleShowAll = (data) => {
        const newData = data.map((el) => ({ ...el, hide: false }));
        setData(newData);
    };

    const handleActive = (data) => {
        const newData = data.map((el) => ({ ...el, hide: el.checked }));
        setData(newData);
    };

    const handleCompleted = (data) => {
        const newData = data.map((el) => ({ ...el, hide: !el.checked }));
        setData(newData);
    };

    const handleClearCompleted = (data) => {
        const newData = data.filter((el) => !el.checked);
        setData(newData);
    };

    return (
        <div className="footer">
            <span id="count">{count(data)} Items left</span>
            <div className="footer-center">
                <button
                    id="showAll"
                    className="selected"
                    onClick={() => handleShowAll(data)}
                >
                    All
                </button>
                <button id="showActive" onClick={() => handleActive(data)}>
                    Active
                </button>
                <button
                    id="showCompleted"
                    onClick={() => handleCompleted(data)}
                >
                    Completed
                </button>
            </div>
            <div className="clear">
                <button
                    id="clearCompleted"
                    onClick={() => handleClearCompleted(data)}
                >
                    Clear completed
                </button>
            </div>
        </div>
    );
};

export default Footer;
