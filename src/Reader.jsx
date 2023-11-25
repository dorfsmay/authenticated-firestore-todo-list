import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase-config";
import "./App.css";

export default function Reader({ auth }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const querySnapshot = await getDocs(collection(firestore, "todos"));
      /*
       * To look at the shape of the data returned form FireStore
      querySnapshot.docs.map((doc) => {
        console.log(doc.id, doc.data());
      });
      */
      const result = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(result);
    };

    console.log("Fetching data...");
    fetchPost();
  }, []);

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Reader {auth ? "AUTH" : "unauth"}</h1>

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
