import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { todoActions } from './taskSlice'


const Completed = () => {
    const cTasks=useSelector((state)=>state.todoo.completed)
    const dispatch=useDispatch()

    const handleClear=()=>{
          dispatch(todoActions.clearC())
    }
 
    if(!cTasks.length){
      return null;
    }
  return (
    <div class="bg-gray-100 p-4 rounded-lg shadow-md">
    <h1 class="text-xl font-bold text-gray-800 mb-4">Completed</h1>
    <div>
    <button
                    onClick={handleClear}
                    className="mb-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                    Clear
                </button>
    </div>
    <ul class="list-disc list-inside">
      {cTasks.map((item) => (
        <h3 key={item.id} class="bg-white p-2 mb-2 rounded-md shadow-sm hover:bg-gray-50">
          <h4 class="text-lg font-medium text-gray-700">{item.title}</h4>
        </h3>
      ))}
    </ul>
  </div>
  
  )
}

export default Completed