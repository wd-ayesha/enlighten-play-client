import { Outlet } from "react-router-dom";
import Footer from './../pages/Home/Shared/Footer/Footer';
import NavigationBar from "../pages/Home/Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
