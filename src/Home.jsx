import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export default function Home() {
  const auth = useContext(AuthContext);
  let name = "Anonymous";
  if (auth && auth.currentUser) {
    const { displayName, email } = auth.currentUser;
    name = displayName || email;
  }

  return (
    <>
      <h1>Home</h1>
      <h3>hello {name}</h3>
      <p>
        No access: &quot;<kbd>allow read, write: if false;</kbd>&quot;
      </p>
      <p>
        R/W access by anyone: &quot;<kbd>allow read, write;</kbd>&quot;
      </p>
      <p>
        R/W by authenticated users only &quot;
        <kbd>allow read, write: if request.auth != null;</kbd>&quot;
      </p>
      <p>
        Read by anyone, write by authenticated users only&quot;
        <kbd>allow read; allow write: if request.auth != null;</kbd>&quot;
      </p>
      <p>
        For more option, check:{" "}
        <a href="https://firebase.google.com/docs/rules/basics">
          FireStore Security Rules
        </a>
      </p>
    </>
  );
}
