import axios from 'axios'
import React, { useReducer, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../Pages/Home'
import Search from '../Pages/Search'
import { todoReducer } from '../Reducer/todoreducer'
import CreateToDo from './CreateToDo'

export const url = "http://localhost:3001/todoInfo";

const arr = [
  {
    name: "1",
    note: "ddd",
    id:1
  }
]

function AllRouts() {
    // const [arr, setArr] = useState([])

    // axios.get(url)
	  //   .then(res => setArr(res.data))      

    const location = useLocation()


	const [state, dispatch] = useReducer(todoReducer, {arr})
  
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home state={state} location={location} dispatch={dispatch}/>}/>
            <Route path='/create' element={<CreateToDo dispatch={dispatch} location={location}/>}/>
            <Route path='/search' element={<Search dispatch={dispatch} location={location} state={state}/>}/>
        </Route>
    </Routes>
  )
}

export default AllRouts