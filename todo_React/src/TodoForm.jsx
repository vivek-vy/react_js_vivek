import { useState } from "react";
import "./Todo.css";
// eslint-disable-next-line react/prop-types
export const TodoForm=({ onAddTodo})=>{

    const [currentValue, setInputValue] = useState({});

    const handleInputEvent = (value) => {
        setInputValue({id : value, content : value ,checked:false});
      };
const handleFormSubmitEvent=(event)=>{
    event.preventDefault();
    onAddTodo(currentValue);
    console.log(currentValue);
    
    setInputValue({id:"", content :"",checked:false});
}

    return(
        <>
         <section className="form" onSubmit={handleFormSubmitEvent}>
          <form>
           <div className="formcontainer">
           <div className="input">
              <input
                type="text"
                className="input-todo"
                value={currentValue.content}
                onChange={(event) => handleInputEvent(event.target.value)}
                placeholder="type your todo task "
                autoComplete="off"
              />
            </div>
            <div>
              <button className="addTaskbtn" type="submit">Add Task</button>
            </div>
           </div>
          </form>
        </section>
        </>
    )
}
