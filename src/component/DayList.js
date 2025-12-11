import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {

    const days = useFetch('http://localhost:3001/days');

    // const [days, setDays] = useState([]);
    // useEffect(() => { // 랜더링이 되고 api 호출을 목적으로 사용함, 처음에만 호출하려면 두번쨰 인자가 []
    //     fetch('http://localhost:3001/days') 
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setDays(data);
    //     })
    // }, []);

    if(days.length === 0) {
        return <span>Loading ...</span>
    }

    return ( 
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
   
    );  
}