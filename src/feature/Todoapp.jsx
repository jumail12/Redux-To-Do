import React from 'react'
import { todoActions } from './taskSlice'
import {useDispatch,useSelector} from "react-redux"
import { useState } from 'react'

const Todoapp = () => {
    const [task,setTask]=useState('')
    const [isedit,setIsedit]=useState(false)
    const [editId,setEditId]=useState(null)

    const data=useSelector((state)=>state.todoo.list)
    const dispatch=useDispatch();

    const handleAdd=()=>{
        if(isedit){
          dispatch(todoActions.editTask({ id:editId, updated:task}))
          setIsedit(false)
          setEditId(null);
        }else{
            dispatch(todoActions.addTask({ id:Date.now(),title:task}))
        }
        setTask("");
    }

    const handleDelete=(id)=>{
        dispatch(todoActions.delete(id))
    }
    
    const handleEdit=(task)=>{
        setTask(task.title);
        setIsedit(true);
        setEditId(task.id)
    }

    const handleCompleted=(id)=>{
        dispatch(todoActions.comp(id))
    }

  return (
    <div class="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">TodoApp</h1>
  
    <div class="flex items-center mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new task"
        class="flex-1 p-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAdd}
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        {isedit ? <span>Set Edit</span> : <span>Add Task</span>}
      </button>
    </div>
  
    <div>
      <ul class="space-y-4">
        {data.map((task) => (
          <li key={task.id} class="flex justify-between items-center bg-white p-4 rounded-md shadow-sm">
            <h4 class="text-lg font-medium text-gray-700">{task.title}</h4>
  
            <div class="space-x-2">
              <button
                onClick={() => handleEdit(task)}
                class="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                class="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
              <button
                onClick={() => handleCompleted(task.id)}
                class="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                Completed?
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  
  );
}

export default Todoapp