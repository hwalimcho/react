import Word from "./Word";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Footer from "./Footer";

export default function Day() {
    //dummy.words
    const { day } = useParams();
    //const wordList = dummy.words.filter(word => word.day === Number(day));

    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    //const [words, setWords] = useState([]);
    // useEffect(() => { // 랜더링이 되고 api 호출을 목적으로 사용함, 처음에만 호출하려면 두번쨰 인자가 []
    //     fetch(`http://localhost:3001/words?day=${day}`) 
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setWords(data);
    //     })
    // }, [day]);

    return (
        <>
            <h2>Day {day}</h2>
            <div className="divTable">
                {words.length === 0 && <span>Loading ...</span>}
                <table>
                    <tbody>
                        {words.map(word => (
                        <Word word={word} key={word.id}/>
                        ))}     
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
        
       
    )
}