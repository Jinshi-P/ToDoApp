
import { useState } from "react";
import "./style.css";

function Taskmanger (){

    const [tasks,setTasks]=useState([]);
    const [inputvalue,setInputvalue]=useState("");

    function addTask (){
        if(inputvalue.length===0){
            return;
        }
        setTasks([
            ...tasks,
          { content: inputvalue,
           isComplete: false,
           isEditing:false
           
        } 
        ]);
        setInputvalue("")

    }
    function deleteTask(taskIndex){
        tasks.splice(taskIndex,1)
        setTasks([
            ...tasks
        ])
    }
     
    function markCompleted(taskIndex){
        tasks[taskIndex].isComplete=!tasks[taskIndex].isComplete;
        setTasks([
            ...tasks
        ])

    }
    function editTask(taskIndex){
         tasks[taskIndex].isEditing=true;
         setTasks([
            ...tasks
              ])


    }
    function UpdateValue(taskIndex,value){
        tasks[taskIndex].content=value;
        setTasks([
            ...tasks
        ])

    }
    function saveTask(taskIndex){
        tasks[taskIndex].isEditing=false;
        setTasks([
           ...tasks
             ])

    }
    return( 
        <div className="taskmanager">
               <h1>Task Manager</h1>
          <div className="tasks">
            
           { 
            
                 
                tasks.sort((a)=>a.isComplete?1:-1).map((task,index)=>
                <div key={index} className="task" >
                    {/* {"task"+( task.isComplete? "completed":"incomplete")} > */}
                    <input type="checkbox" checked={task.isComplete} onChange={()=>markCompleted(index)} />
                    {
                        task.isEditing?
                        
                           <input value={task.content} onChange={(event)=>UpdateValue(index,event.target.value)} className="edit-input"/>:
                          
                        
                        <span className="content">
                            {
                                task.isComplete?
                                <del>{task.content}</del>:
                                task.content
                            }

                        </span>

                    }
                 
                    {
                     task.isEditing?
                        
                        <button className="save" onClick={()=>saveTask(index)}>Save</button>:
                        <button className="edit" onClick={()=>editTask(index)}>Edit</button>

                        }
            
                    
                    <button className="delete" onClick={()=>deleteTask(index)}> Delete</button> </div>
                 )
                
                
                }
                
            </div>
        
           <div className="add-task-container">
             <input  value={inputvalue} onChange={(event)=>setInputvalue(event.target.value)} placeholder="Add your task"/>
             <button className="enter" onClick={addTask}>
                Add
             </button>
           </div>

        </div>  
         

    );
   
}

export default Taskmanger;