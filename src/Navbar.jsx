import { useContext } from "react";
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signed out successfully");
        //navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/writerunauthenticated">Writer unauth</NavLink>
        <NavLink to="/readerunauthenticated">Reader unauth</NavLink>
        <NavLink to="/writerauthenticated">Writer AUTH</NavLink>
        <NavLink to="/readerauthenticated">Reader AUTH</NavLink>
      </nav>
      {auth && auth.currentUser ? (
        <button onClick={handleLogout}> Logout </button>
      ) : (
        <button onClick={() => navigate("/login")}> Login </button>
      )}
    </div>
  );
}
