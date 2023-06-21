
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import './App.css'
import TodoList from './components/TodoList.jsx'
import TodoForm from './components/TodoForm'
// import { Auth } from './components/Auth'

function App() {
  return (
    <div className='bg-emerald-500 m-4 p-4'>
      <header>
        <h1 className='text-3xl font-bold'>To Do List</h1>
      </header>
      {/* <Auth/> */}
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default App
library.add(fab, fas, far)