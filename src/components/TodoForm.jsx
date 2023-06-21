import { useState } from "react";
import { useTodoContext } from "../context/TodoProvider";
import AuthForm from "./Auth";

const TodoForm = () => {
    const { todoList, addTask, useToggle } = useTodoContext();
    const [value, setValue] = useState("");
    const submit = (e) => {
    e.preventDefault();

if(!value){
    return
}



    addTask(value)

    setValue('')
    console.log("new task=>", value);
    };
    return (
    <form className="" onSubmit={submit}>
        <h3>To Do Items: {todoList.length}</h3>
        <AuthForm/>
        <input className="m-3 placeholder:italic placeholder:text-slate-400 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Add Task"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <button className='hover:text-white' type="submit">Create</button>
        
        
    </form>
    );
};

export default TodoForm;