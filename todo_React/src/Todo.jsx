import "./Todo.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { TodoForm } from "./TodoForm";

import { TodoDateTime } from "./TodoDateTime";
import { TodoDiaplay } from "./TodoDisplayList";
import { getTodoLocalStorage, setTodoLocalStorage } from "./TodoLocalStorage";

export const TodoApp = () => {
  const [task, setTask] = useState(() => getTodoLocalStorage());

  // form
  const handleFormSubmitEvent = (currentValue) => {
    const { id, content, checked } = currentValue;

    if (!content) {
      return;
    }

    const ifTodoMatch = task.find((curtask) => curtask.content === content);

    if (ifTodoMatch) {
      Swal.fire({
        title: "Task Already exists",
        text: "Enter Another Task",
        icon: "warning",
        confirmButtonText: "ok",
      });
      return;
    }

    setTask((preTask) => [...preTask, { id, content, checked }]);
    console.log(task);
  };

  // clear button

  const handleClearTodobtn = (data) => {
    const targetTask = task.find((curtask) => curtask.content === data);

    if (targetTask && targetTask.checked === false) {
      Swal.fire({
        title: "Cannot Remove Task",
        text: "The task is unchecked. please check it before remove.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    {
      const upDatedTask = task.filter((curtask) => curtask.content !== data);

      setTask(upDatedTask);
    }
  };

  // add task to  localstorage

  setTodoLocalStorage(task);

  // clear all  task button
  const clearTodobtn = () => {
    Swal.fire({
      title: "Do you want to clear all tasks?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        // delete logic here
        setTask([]);
      }
    });
  };

  // checked btn
  const handleCheckedBtn = (content) => {
    const upDatedTask = task.map((curtask) => {
      if (curtask.content === content) {
        return { ...curtask, checked: !curtask.checked };
      } else {
        return curtask;
      }
    });
    setTask(upDatedTask);
  };

  return (
    <div className="container p-0">
      <header>
        <h1 className="">Todo List </h1>
        <TodoDateTime handleDateTime={setInterval} />
      </header>
      <TodoForm onAddTodo={handleFormSubmitEvent} />
      <TodoDiaplay
        TaskDataArray={task}
        onClearbtn={handleClearTodobtn}
        onCheckedBtn={handleCheckedBtn}
      />
      <section className="clearbtn">
        <button style={{ margin: "2rem" }} onClick={clearTodobtn}>
          Clear All
        </button>
      </section>
    </div>
  );
};
