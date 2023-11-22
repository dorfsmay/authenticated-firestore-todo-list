import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

// https://stackoverflow.com/questions/74168742/how-to-template-jsx-with-createbrowserrouter

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
