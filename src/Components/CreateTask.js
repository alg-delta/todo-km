import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("Поле не може бути порожнім");
      return;
    }
    if (task.length > 50) {
      alert("Поле не може бути більше 50 символів");
      return;
    }

    console.log(task);
    props.addTask(task);
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setTask(event.target.value)}
          type="text"
          placeholder="Напишіть задачу"
          value={task}
          tpe="text"
        />

        <button type="submit" className="btn1">
          Додати задачу
        </button>
      </form>
    </div>
  );
}
