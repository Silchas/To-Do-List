/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todoList, settodoList] = useState([]);

    const NumberOfTasks=()=> todoList.length

    const addTask =(newTask)=>{
        settodoList([...todoList, newTask])
    }

    const removeTask = (taskIndex)=>{
        const newList = todoList.filter((_, index) =>index !== taskIndex)
        settodoList(newList)
    }


    const contextValue = {
        todoList,
        addTask,
        NumberOfTasks,
        removeTask,
    };

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;