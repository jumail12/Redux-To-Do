// import {createSlice} from "@reduxjs/toolkit"

// const intial={
//     list:[],
//     completed:[]
// }

// const taskSlice=createSlice({
//     name:"tasks",
//     initialState:intial,
//     reducers:{
//         addTask:(state,action)=>{
//             state.list.push(action.payload)
//         },
//         delete:(state,action)=>{
//             state.list=state.list.filter((task)=>task.id!==action.payload)
//         },
//         editTask:(state,action)=>{
//             const {id,updated}=action.payload;
//             const existing=state.list.find((task)=>task.id===id)
//             if(existing){
//                 existing.title=updated
//             }
//         },
//         comp:(state,action)=>{
//             const Ctask=state.list.find((task)=>task.id===action.payload);
            
//           if(Ctask){
//             state.completed.push(Ctask);
//             state.list=state.list.filter((task)=>task.id!==action.payload);
//           }
//         }
//     }
// });

// export const todoActions=taskSlice.actions;
// export default taskSlice.reducer;

// ------------------------------------------
import {createSlice} from "@reduxjs/toolkit"

const intial={
    list:[],
    completed:[]
}

const taskSlice=createSlice({
    name:"tasks",
    initialState:intial,
    reducers:{
        addTask:(state,action)=>{
            state.list.push(action.payload)
        },
        delete:(state,action)=>{
            state.list=state.list.filter((item)=>item.id!==action.payload)
        },
        editTask:(state,action)=>{
            const {id,updated}=action.payload;
            const uItem=state.list.find((item)=>item.id===id)
           if(uItem){
            uItem.title=updated;
           }
        },
        comp:(state,action)=>{
            const Citem=state.list.find((item)=>item.id===action.payload)
            if(Citem){
                state.completed.push(Citem)
                state.list=state.list.filter((item)=>item.id!==action.payload)
            }
        },
        clearC:(state)=>{
            if(state.completed.length>0){
                state.completed=[];
            }
        } 
    }
})

export const todoActions=taskSlice.actions
export default taskSlice.reducer

