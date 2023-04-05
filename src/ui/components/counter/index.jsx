import { useState ,useEffect} from "react";

const Counter = () =>{
    
    const[count ,setCount] = useState(0);
    useEffect (()=>{
        const setIntervalID=setInterval(() => {
            console.log('interval');
            setCount(prevCount=>prevCount+1);
        }, 1000);
        setCount(count+1);
        return ()=>clearInterval(setIntervalID);
    },[]);
   
    const incrementar =()=>{
        setCount(count+1);
    }
    const decrementar =()=>{
        setCount(count-1);
    }
    return <div>
        <h2>Contador</h2>
        <p>{count}</p>
        <button onClick={decrementar}>decrementar</button>
        <button onClick={incrementar}>incrementar</button>
    </div>
     
}

export default Counter;