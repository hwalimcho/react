import { useEffect, useState } from "react";

export default function useFetch(url) {
     const [data, setData] = useState([]);
    
    useEffect(() => { // 랜더링이 되고 api 호출을 목적으로 사용함, 처음에만 호출하려면 두번쨰 인자가 []
        fetch(url) 
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
    }, [url]);

        return data;
}