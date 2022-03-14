import { useEffect, useState } from "react";
import react from "react";
import axios from "axios";
import "./NewTask.css";
import { Form } from "react-bootstrap";

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
      <Form>
        <Form.Label>Enter a New Task! :)</Form.Label>
        <p></p>
        <Form.Control
          type="text"
          placeholder="Your New Task!"
          onChange={(event) => updateNewTask(event)}
        ></Form.Control>
        <p></p>
        <button className="TaskButton" onClick={addTask}>
          Add Task
        </button>
      </Form>
    </div>
  );
}

export default NewTask;
