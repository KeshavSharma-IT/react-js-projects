import { useEffect, useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [iseditTask, setIsEditTask] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("LocalTodo")) {
      const storedList = JSON.parse(localStorage.getItem("LocalTodo"));
      setTaskList(storedList);
    }
  }, []);
  const SavetoLocal = () => {
    if (!task) {
      alert("Please fill in data");
    } else if (task && !toggleSubmit) {
      setTaskList((prevTaskList) =>
        prevTaskList.map((existingTask) =>
          existingTask.id === iseditTask
            ? { ...existingTask, title: task }
            : existingTask
        )
      );
      localStorage.setItem(
        "LocalTodo",
        JSON.stringify(
          taskList.map((existingTask) =>
            existingTask.id === iseditTask
              ? { ...existingTask, title: task }
              : existingTask
          )
        )
      );
      setToggleSubmit(true);
      setTask("");
    } else {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTaskList((prevTaskList) => [...prevTaskList, newTask]);
      localStorage.setItem("LocalTodo", JSON.stringify([...taskList, newTask]));
      setTask("");
      setToggleSubmit(true);
    }
  };

  const Edit = (id) => {
    setToggleSubmit(false);
    const editTask = taskList.find((task) => task.id === id);
    console.log(editTask);
    setTask(editTask.title);
    setIsEditTask(editTask.id);
    console.log(iseditTask);
  };

  const Delete = (id) => {
    const deleted = taskList.filter((t) => t.id !== id);
    setTaskList(deleted);
    localStorage.setItem("LocalTodo", JSON.stringify(deleted));
  };
  return (
    <div className="container row">
      <div className="col-lg-4"></div>
      <div className="col-lg-6">
        <h1 className="text-center">Todo List</h1>
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              className="form-control bg-light"
              placeholder="Enter your task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="col-2">
            {toggleSubmit ? (
              <button className="btn btn-primary" onClick={SavetoLocal}>
                Add
              </button>
            ) : (
              <button className="btn btn-info" onClick={SavetoLocal}>
                Edit
              </button>
            )}
          </div>
        </div>

        <table className="table mx-2">
          <thead>
            <tr>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td className="btn btn-info mx-5" onClick={() => Edit(task.id)}>
                  Edit
                </td>
                <td className="btn btn-danger" onClick={() => Delete(task.id)}>
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Todo;
