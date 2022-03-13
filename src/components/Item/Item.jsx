import { useEffect, useState } from "react";
import react from "react";
import axios from "axios";
import "./Item.css";
import { Card, Button } from "react-bootstrap";

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

const completeTask = () =>{
  axios.put( `/todo/${ props.item.id}` ).then( ( response )=>{
      console.log( 'PUT: Change!', response ); 
      props.getList();
  }).catch( (err)=>{
      alert( 'Error in PUT' );
      console.log( err );
  })
}
  return (

    <div className="Item">
    <Card className="Card">
      <Card.Header className="Header" >{props.item.tasks}</Card.Header>
      <Card.Body>
      {
        props.item.task_completed?
        <p>Complete!</p>:
        <p>Must Finish<button onClick={completeTask}>Task Completed!</button></p>

      }
      <Button className="ItemButton" onClick={deleteTask}>Delete!</Button>
      </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
