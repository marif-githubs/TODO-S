import './App.css'
import { Head } from './components/Head.jsx'
import Workcard from './components/Workcard.jsx'
import Inputfields from './components/Inputfields.jsx'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import { useState } from 'react'

function App() {

  let data = [
    { todo: "buy milk", deadline: '02/12/2024', },
    { todo: "homework", deadline: '22/12/2024', },
    { todo: "bulid website", deadline: '30/12/2024', }
  ]

  let [todolist, setTodoList] = useState(data);

  const handleDeleteTodo = (item) => {
    let newlist = todolist.filter((i) => i.todo !== item)
    setTodoList(newlist)
  }

  return (
    <>
      <div >
        <Head />
        <Inputfields list={todolist} handleAddTodo={(newlist) => setTodoList(newlist)} />
        {todolist.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <Workcard items={todolist} onDeleteTodo={(item) => handleDeleteTodo(item)}></Workcard>
      </div>
    </>
  )
}

export default App
