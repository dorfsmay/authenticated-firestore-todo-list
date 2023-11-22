import "./App.css";
import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Error from "./Error";
import Signup from "./Signup";
import Login from "./Login";
import AuthProvider from "./AuthContext";
import Writer from "./Writer";
import Reader from "./Reader";

function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    console.log("AUTH ==> ", auth);
  }, [auth]);

  const router = createBrowserRouter([
    { path: "/login", element: <Login />, errorElement: <Error /> },
    { path: "/signup", element: <Signup /> },
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home />, errorElement: <Error /> },
        {
          path: "/writerunauthenticated",
          element: <Writer auth={false} />,
        },
        {
          path: "/writerauthenticated",
          element: auth?.currentUser ? (
            <Writer auth={true} />
          ) : (
            <Navigate to="/Login" />
          ),
        },
        {
          path: "/readerunauthenticated",
          element: <Reader auth={false} />,
        },
        {
          path: "/readerauthenticated",
          element: auth?.currentUser ? (
            <Reader auth={true} />
          ) : (
            <Navigate to="/Login" />
          ),
        },
      ],
    },
  ]);

  return (
    <AuthProvider {...{ auth, setAuth }}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
