import { useEffect, useState } from "react";
import react from "react";
import axios from "axios";

function NewTask(props) {
  const [newTask, setNewTask] = useState({
    tasks: "",
  });

  const addTask = () => {
    console.log("add tasks");
    axios
      .post("/todo", newTask)
      .then((response) => {
        console.log("Post:", response.data);
        props.getList();
      })
      .catch((err) => {
        console.log(err);
        alert("Post error");
      });
  };

  const updateNewTask = (event) => {
    setNewTask({ ...newTask, tasks: event.target.value });
  };
  return (
    <div>
      <h1>Create New Task </h1>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => updateNewTask(event)}
      ></input>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default NewTask;
