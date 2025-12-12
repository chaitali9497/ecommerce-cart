import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <Outlet />
      </main>
    </>
  );
}
