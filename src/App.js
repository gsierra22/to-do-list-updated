import "./App.css";
import Body from "./components/Body/Body";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    console.log("get list!");
    axios
      .get("/todo")
      .then((response) => {
        console.log(response.data);
        setList(response.data);
      })
      .catch((err) => {
        alert("error!");
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Body list={list} getList={getList} />
    </div>
  );
}

export default App;
