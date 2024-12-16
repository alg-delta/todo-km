import React from "react";
import CreateTask from "./CreateTask";
import { useState, useEffect } from "react";
import TaskList from "./TaskList";
export default function Main() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("savedListKM")) ?? [];
  });
  const addTask = (task) => {
    const newTask = {
      id: Math.floor(Math.random() * 90000) + 10000,
      text: task,
      isComplete: false,
    };
    setList([...list, newTask]);

    // console.log("Задача в мейні");
  };

  const deleteTask = (id) => {
    console.log("delete", id);
    const newList = list.filter((task) => task.id !== id);
    setList(newList);
  };

  console.log(list);

  const CompleteTask = (id) => {
    console.log("задачу виконано", id);
    const newList = list.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setList(newList);
  };
  useEffect(() => {
    localStorage.setItem("savedListKM", JSON.stringify(list));
  }, [list]);

  return (
    <div className="main">
      <h3 className="title">Список задач </h3>
      <CreateTask addTask={addTask} />
      <TaskList
        list={list}
        deleteTask={deleteTask}
        CompleteTask={CompleteTask}
      />
    </div>
  );
}
