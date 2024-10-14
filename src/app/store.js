import {configureStore} from "@reduxjs/toolkit"
import taskReducer from "../feature/taskSlice"
import { useState } from "react"

const store=configureStore({
    
    reducer:{
        todoo:taskReducer
    }
})

export default store