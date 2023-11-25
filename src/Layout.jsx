import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

// https://reactrouter.com/en/main/components/outlet
// https://stackoverflow.com/questions/74168742/how-to-template-jsx-with-createbrowserrouter

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
