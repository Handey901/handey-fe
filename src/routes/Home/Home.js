import React, {useEffect} from "react";
import AfterBoxList from "../../components/Home/AfterBoxList";
import ToDoBoxList from "../../components/Home/ToDoBoxList";
import Memo from "../../components/Home/Memo";
import WeeklyBoxList from "../../components/Home/WeeklyBoxList";
import "./Home.css";

class Home extends React.Component {
    

    render() {

        return <div className = "home-layout">
            <div className = "home-layout__wrap">
                <div className = "home-layout__wrap__left">
                    <WeeklyBoxList />
                    <AfterBoxList />
                </div>
                <div className = "home-layout__wrap__right">
                    <ToDoBoxList />
                    <Memo />
                </div>
            </div>
        </div>;
    }
}



export default Home;