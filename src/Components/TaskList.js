import React from "react";

export default function TaskList(props) {
  return (
    <ul className="list">
      {props.list.map((task) => (
        <li className="task" key={task.id}>
          <p
            className={task.isComplete ? "complete" : "text"}
            onClick={() => props.CompleteTask(task.id)}
          >
            {task.text}
          </p>
          <button
            onClick={() => props.deleteTask(task.id)}
            className="btn1"
            type="button"
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
