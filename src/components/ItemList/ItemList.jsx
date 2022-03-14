import { useEffect, useState } from "react";
import react from "react";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList(props) {
  //const [name, setName]=useState(null);
  return (
    <div>
      <h1>My Tasks!</h1>
      <div className="List-Card">
      {
        props.list.map(item=>(
          <Item item={item}  getList={props.getList}/>
        ))
      }
      </div>
    </div>
  );
}

export default ItemList;
