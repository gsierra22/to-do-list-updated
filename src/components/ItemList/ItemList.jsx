import { useEffect, useState } from "react";
import react from "react";
import Item from "../Item/Item";

function ItemList(props) {
  //const [name, setName]=useState(null);
  return (
    <div>
      <h1>ItemList</h1>
      <h3>{JSON.stringify(props)}</h3>
      {
        props.list.map(item=>(
          <Item item={item}  getList={props.getList}/>
        ))
      }
    </div>
  );
}

export default ItemList;
