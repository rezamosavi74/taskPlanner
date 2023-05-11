import { useState, createContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import ToDo from './ToDo'
import Navbar from './Navbar'
import Task from './Task'

export const UserContext = createContext();

function App() {


  const [state, setState] = useState({
    name: '',
    category: 'Math',
    colaborate: '',
    detail: '',
    stime: '',
    etime: '',
    isDone: false,
    id: 0
  });

  const [data, setData] = useState([])


  return (
    <>
      <UserContext.Provider value={{ state, setState, data, setData }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/todo" element={<ToDo />}></Route>
          <Route path="/tasks" element={<Task />}></Route>
        </Routes>
      </UserContext.Provider>

    </>
  )
}

export default App
