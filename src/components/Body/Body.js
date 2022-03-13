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
      <div className="Input-Div">
        <Card className="Input-Card">
          <Card.Header className="Input-Header">To Do!</Card.Header>
          <NewTask getList={props.getList} />
        </Card>
      </div>
      <ItemList list={props.list} getList={props.getList} />
    </div>
  );
}

export default Body;
