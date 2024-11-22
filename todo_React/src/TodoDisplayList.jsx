/* eslint-disable react/prop-types */
import "./Todo.css";
import { TodoTaskList } from "./TodoUlList";

export const TodoDiaplay = ({ onClearbtn, TaskDataArray, onCheckedBtn }) => {
  // const {id,content,checked}=TaskDataArray;
  // console.log(TaskDataArray);

  // const handleClearTodobtn=(data)=>{
  //    onClearbtn(data)
  // }

  return (
    <>
      <section className="ullist ">
        <ul>
          {TaskDataArray.map((curtask) => {
            return (
              <>
                <TodoTaskList
                  key={curtask.id}
                  data={curtask.content}
                  checked={curtask.checked}
                  onAddTask={(data) => onClearbtn(data)}
                  onhandlechecked={(data) => onCheckedBtn(data)}
                />
              </>
            );
          })}
        </ul>
      </section>
    </>
  );
};
