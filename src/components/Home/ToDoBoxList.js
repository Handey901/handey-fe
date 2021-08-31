import React, { useState, useEffect } from "react";
import axios from "axios";
import ToDoBox from "./ToDoBox";
import "./ToDoBoxList.css";


function ToDoBoxList() {
    const baseUrl = "http://localhost:8080";

    // const [input, setInput] = useState(""); //input 초기값이 ""
    const [toDoBoxListData, setToDoBoxListData] = useState([]); //todos 빈 객체 배열로 만들어줌

    useEffect(() => {
        getToDoBoxList();
    }, []);

    async function getToDoBoxList() {
        await axios.get(baseUrl + "/toDoBoxList")
            .then((response) => {
                console.log(response.data)
                setToDoBoxListData(response.data)
            })
            .catch((error) => {
                console.error("ERROR: " + error);
            });

        // 콘솔 출력 확인
        // toDoBoxListData = await axios.get(baseUrl + "/toDoBoxList")
        //     .then((response) => {
        //         console.log(response.data)
        //     })
        //     .catch((error) => {
        //         console.error("ERROR: " + error);
        //     });
        
    };

    return <div className="toDoBoxList">
        {            
            toDoBoxListData.map(toDoBox => {
                return <ToDoBox 
                    key = {toDoBox.id}
                    id = {toDoBox.id}
                    title = {toDoBox.title}
                    fixed = {toDoBox.fixed}
                    toDoElmList = {toDoBox.toDoElmList}
                />;
            })
        }

    </div>;
}

export default ToDoBoxList;