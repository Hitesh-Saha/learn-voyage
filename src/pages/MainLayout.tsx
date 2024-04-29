import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <>
      <div className="app bg-base">
        <NavBar></NavBar>
        <div className="overflow-auto w-11/12 h-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
