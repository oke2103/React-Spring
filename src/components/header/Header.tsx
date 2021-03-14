import React, {useEffect, useState} from "react";

const Header: React.FC = () => {
    const [date,setDate] = useState("");
    const [count,setCount] = useState(0);

    useEffect( () => {
        fetch('api/hello')
            .then(response => response.text())
            .then(date => {
                setDate(date);
            });
        },[]
    )

    return(
        <div>
            <div>
                현재시간은 {date} 입니다.
            </div>
            <div>현재카운트는 {count} 입니다. </div>
            <button onClick={() => setCount(count+1)}>+1</button>
            <button onClick={() => setCount(count-1)}>-1</button>
        </div>
    );
};

export default Header;