import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Footer() {

    const dayNumber = Number(useParams().day);
    const days = useFetch(`http://localhost:3001/words?day=${dayNumber}`)
    const allWords = useFetch(`http://localhost:3001/words`)
    
    let maxDay = 0;
    for(let i = 1; i<allWords.length; i++){
        maxDay = maxDay < allWords[i].day ? allWords[i].day : Number(maxDay);
    }

    console.log("dayNumber >>>", dayNumber);
    console.log("maxDay >>>", maxDay);
    return (
        <div className="footer">
            <div>
                {dayNumber !== 1 &&  
                    <Link to={`/day/${dayNumber-1}`} className="link">
                    어제
                    </Link>
                }
                <span>day: {dayNumber}</span>
                
                {dayNumber !== maxDay &&
                    <Link to={`/day/${dayNumber+1}`} className="link">
                    내일       
                    </Link>
                }
                
            </div>   
        </div>
        
    );
}