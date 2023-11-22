import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "./firebase-config";
import "./App.css";

export default function Writer({ auth }) {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [lastId, setLastId] = useState();

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(firestore, "todos"), {
        task: todo,
      });
      setLastId(docRef.id);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      const querySnapshot = await getDocs(collection(firestore, "todos"));
      const result = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(result);
    };

    console.log("Fetching data...");
    fetchPost();
  }, [lastId]);

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Writer {auth ? "AUTH" : "unauth"}</h1>

        <div>
          <div>
            <input
              type="text"
              placeholder="What do you have to do today?"
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="btn" onClick={addTodo}>
              Submit
            </button>
          </div>
        </div>

        <div className="todo-content">
          <ul>
            {todos?.map((todo) => (
              <li key={todo.id}>{todo.task}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
