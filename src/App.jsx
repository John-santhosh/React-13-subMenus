import Hero from "./components/Hero";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Submenu from "./components/Submenu";
// import
const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <SideBar></SideBar>
      <Submenu></Submenu>
    </main>
  );
};
export default App;
