//import { useState } from "react";
import "./Todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";

// eslint-disable-next-line react/prop-types
export const TodoTaskList = ({ data, onAddTask, onhandlechecked, checked }) => {
  // const handleClearTodobtn = () => {
  // onAddTask(data);
  // };

  // const [isRightClick, SetClick] = useState(false);

  // // const line = () => {
  //   return SetClick(!isRightClick);
  //   //, alert("checked")
  // };
 
  
  return (
    <>
      <li className="liList">
        <span className={` ${"liTodo"} ${checked ? "lineThrough" : ""} `}>
          {data}
        </span>
       
       <button className="checkBtn commonbtn " onClick={()=>onhandlechecked(data)
       }>
          <MdCheck />
        </button>
        <button className="clearbtn commonbtn " onClick={() => onAddTask(data)}>
          <MdDeleteForever />
        </button>
      
      </li>
    </>
  );
};
