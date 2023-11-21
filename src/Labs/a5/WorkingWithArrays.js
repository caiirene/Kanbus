import React, { useState, useEffect } from "react";
import axios from "axios";


function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);

  const TODOS_API = "https://five610-node-caiirene.onrender.com/a5/todos";

  const [id, setId] = useState(1);
  const [title, setTitle] = useState("Go to work");

  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await axios.get(TODOS_API);
    setTodos(response.data);
  };

  const removeTodo = async (todo) => {
    const response = await axios
      .get(`${TODOS_API}/${todo.id}/delete`);
    setTodos(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${TODOS_API}/create`);
    setTodos(response.data);
  };

  const fetchTodoById = async (id) => {
    const response = await axios.get(`${TODOS_API}/${id}`);
    setTodo(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(
      `${TODOS_API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  const postTodo = async () => {
    const response = await axios.post(TODOS_API, todo);
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (todo) => {
    try {
      const response = await axios.delete(`${TODOS_API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const updateTodo = async () => {
    try {
      const response = await axios.put(
        `${TODOS_API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (
        t.id === todo.id ? todo : t)));
      setTodo({});
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }

  };







  useEffect(() => {
    fetchTodos();
  }, []);






  const fetchTodosPromise = () => {
    const promise = axios.get(TODOS_API);
    promise.then((response) => {
      setTodos(response.data);
    });
  };



  return (
    <div>
      <h1 style={{ color: "orange" }}>--------Working with Arrays---------</h1>

      <h4 style={{ color: "lightblue" }}>Retrieving Arrays</h4>
      <a href={TODOS_API} className="btn btn-danger me-2">
        Get Todos
      </a>
      <br /><br />

      <h4 style={{ color: "lightblue" }}>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={id}
        onChange={(e) => setTodo({
          ...todo,
          id: e.target.value
        })} />
      <a href={`${TODOS_API}/${todo.id}`}
        className="btn btn-danger me-2">
        Get Todo by ID
      </a>
      <br /><br />

      <h4 style={{ color: "lightblue" }}>Filtering Array Items</h4>
      <a href={`${TODOS_API}?completed=true`}
        className="btn btn-danger me-2" >
        Get Completed Todos
      </a>
      <br /><br />

      <h4 style={{ color: "lightblue" }}>Creating new Items in an Array</h4>
      <a href={`${TODOS_API}/create`}
        className="btn btn-danger me-2">
        Create Todo
      </a>
      <br /><br />

      id:
      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value
        })}
        className="form-control mb-2"
        type="number"
      />
      todo name:
      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value
        })}
        className="form-control mb-2"
        type="text"
      />

      <h3 style={{ color: "lightblue" }}>Updating an Item in an Array</h3>
      <a
        href={`${TODOS_API}/${todo.id}/title/${todo.title}`}
        className="btn btn-danger me-2" >
        Update Title to {todo.title}
      </a>
      <h3 style={{ color: "lightblue" }}>Deleting from an Array</h3>
      <a href={`${TODOS_API}/${todo.id}/delete`}
        className="btn btn-danger me-2">
        Delete Todo with ID = {todo.id}
      </a>
      <h3 style={{ color: "lightblue" }}>change complete</h3>
      <input
        value={todo.completed}
        onChange={(e) => setTodo({
          ...todo, completed: e.target.checked
        })}

        type="checkbox"
      />
      <a href={`${TODOS_API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-danger me-2">
        change completed Todo with ID = {todo.id}
      </a>
      <br />
      <h3 style={{ color: "lightblue" }}>change description</h3>
      description:
      <input
        value={todo.description || ''}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value
        })}
        className="form-control mb-2"
        type="text"
      />
      <a href={`${TODOS_API}/${todo.id}/description/${todo.description}`}
        className="btn btn-danger me-2">
        change description Todo with ID = {todo.id}
      </a>
      <br /><br />

      <textarea
        onChange={(e) => setTodo({
          ...todo,
          description: e.target.value
        })}
        value={todo.description} type="text"
      />
      <input
        onChange={(e) => setTodo({
          ...todo, due: e.target.value
        })}
        value={todo.due} type="date"
      />
      <label>
        <input
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked
          })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo}
        className="btn btn-warning mb-2 w-100">
        Post Todo
      </button>

      <button onClick={updateTodo}
        className="btn btn-warning mb-2 w-100">
        Update Todo
      </button>

      <button onClick={createTodo}
        className="btn btn-warning mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle}
        className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
            className="list-group-item">
            <button
              onClick={() => removeTodo(todo)}
              className="btn btn-danger float-end" >
              Remove
            </button>
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end" >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2">
              Delete
            </button>
            <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}

      <br /><br /><br /><br /><br /><br /><br /><br />


      <hr />
      <hr />
      <hr />
      <h2>Update item title</h2>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <hr />
      <hr />
      <hr />

      <a
        href={`http://five610-node-caiirene.onrender.com/a5/todos/${id}/title/${title}`}
        className="btn btn-primary"
      >
        Update Todo Title-1
      </a>
      <hr />
      <hr />
      <hr />
      <h2>Fetch item by id</h2>

      <input
        className="form-control"
        value={id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />some
      <hr />




    </div>
  );
}

export default WorkingWithArrays;