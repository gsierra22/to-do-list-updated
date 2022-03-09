import { useEffect, useState } from "react";
import react from "react";
import axios from "axios";

function Item(props) {
  //const [name, setName]=useState(null);

  const deleteTask = () =>{
    axios.delete( `/todo/${ props.item.id}` ).then( ( response )=>{
        console.log( 'DELETE:hello!', response ); 
        props.getList();
    }).catch( (err)=>{
        alert( 'Error in delete' );
        console.log( err );
    })
}
  return (
    <div>
      <h1>{props.item.tasks}</h1>
      {
        props.item.task_completed?
        <p>Complete!</p>:
        <p>Must Finish</p>

      }
      <button onClick={deleteTask}>Delete!</button>
    </div>
  );
}

export default Item;
