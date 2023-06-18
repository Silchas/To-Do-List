import { useTodoContext } from '../context/TodoProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoList = () => {
    const { todoList, removeTask, markTaskAsComplete } = useTodoContext()

    return (
    <ul className='text-black flex flex-col space-y-2 m-3'>
        {todoList.map((todo, index) => (
        <li
            className='border-2 border-rose-500 capitalize bg-white'
            key={index}
        >
          {todo}
          <button className='ml-5' onClick={() => removeTask(index)}>
            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
