const todoKey="reactTodo";

export  const getTodoLocalStorage=()=>{
    const PreviousData=localStorage.getItem(todoKey)

    if( !PreviousData) return [];

    return JSON.parse(PreviousData)
  }

  export const  setTodoLocalStorage=(task)=>localStorage.setItem(todoKey,JSON.stringify(task));

 
