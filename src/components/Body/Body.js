import { useEffect, useState } from "react";
import react from "react";
import "./Body.css";
import { Card } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import NewTask from "../NewTask/NewTask";

function Body(props) {
  //const [name, setName]=useState(null);
  return (
    <div>
      <nav class="navbar">
        <span class="navbar-brand mb-0 h1"></span>
      </nav>
      <div className="Input-Div">
        <p></p>
        <Card className="Input-Card">
          <Card.Header className="Input-Header">To Do List</Card.Header>
          <NewTask getList={props.getList} />
        </Card>
      </div>
      <ItemList list={props.list} getList={props.getList} />
    </div>
  );
}

export default Body;
