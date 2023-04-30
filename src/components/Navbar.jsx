import { useGlobalContext } from "../Context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  function handleSubmenu(e) {
    // console.log(e.target.classList);
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  }
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h2 className="logo">Strapi</h2>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars className="bars"></FaBars>
        </button>
        <NavLinks></NavLinks>
      </div>
    </nav>
  );
};

export default Navbar;
