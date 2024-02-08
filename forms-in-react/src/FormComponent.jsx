import { useState } from "react";
import React from "react";
export function FormComponent(){
  const [formState,setformState]=useState(
    {
      taskname:'',
      taskDescription:'',
      isCompleted:false,
      assaignedto:''
    }
  );


  function handleinputs(event){
let eventvalue;
eventvalue=event.target.type==="checkbox"?(event.target.checked):(event.target.value);

let details={
  ...formState,
[event.target.name]:eventvalue,
 }
 
setformState(details);

  }



  function handle_Submit_And_Clear_state_Values(){
    event.preventDefault()
 
    console.log({...formState});
    let clearstate={
      ...formState,
      taskname:'',
      taskDescription:'',
      isCompleted:false,
      assaignedto:''
     }
     setformState(clearstate)
  }

  
return(
  <div>
  <form type="submit">
  <input name="taskname" value={formState.taskname} type="text" placeholder="Enter task" onChange={handleinputs}/>
  <textarea name="taskDescription" placeholder="Task Dexcription" value={formState.taskDescription}  cols="30" rows="10" onChange={handleinputs}></textarea>
  <br />
  <input name="isCompleted" value={formState.isCompleted}  type="checkbox"  onChange={handleinputs}/>
  <br />
  <select name="assaignedto" value={formState.assignedto} onChange={handleinputs}>
    <option value="">Assaigned to</option>
    <option value="Ratan kumar paul">Ratan kumar paul</option>
    <option value="Sampa paul">sampa paul</option>
    <option value="Swarnava paul">swarnava paul</option>
  </select>
<button onClick={handle_Submit_And_Clear_state_Values}>submit form</button>
</form>
</div>
)
}