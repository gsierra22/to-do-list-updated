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
      <h1>To Do!</h1>
      <NewTask getList={props.getList} />
      <ItemList list={props.list} getList={props.getList} />
    </div>
  );
}

export default Body;
