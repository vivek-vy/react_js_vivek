import { useEffect, useState } from "react";
import "./Todo.css";

export const TodoDateTime =()=>{

    const [dateAndTime, setdateAndTime] = useState("");
// css for date 
    const DateStyle={backgroundColor:"lightblue",
        textAlign:"center",
       padding:"5px",
       fontWeight:"700",
       color:"rgb(255, 49, 169)"
       ,height:"3rem"
     }
     // todo time and date
 useEffect(()=>{
    const interval= setInterval(() => {
        var now = new Date();
        const currentDate = now.toLocaleDateString();
        const currentTime = now.toLocaleTimeString();
        setdateAndTime(`${currentDate} - ${currentTime}`);
      }, 1000);
    
      return ()=>clearInterval(interval);
    
 },[])
    return(
        <>
         <h2 className="date" style={DateStyle} >{dateAndTime}</h2>
        </>
    )
}