import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import { useGlobalContext } from "../Context";
const SideBar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes> </FaTimes>
        </button>
        <div className="sidebar-links">
          {sublinks.map((link) => {
            const { links, page, pageId } = link;
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { id, label, icon, url } = link;
                    // console.log(link);
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
