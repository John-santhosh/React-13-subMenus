import { useGlobalContext } from "../Context";
import sublinks from "../data";
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();

  const currentPage = sublinks.find((link) => link.pageId === pageId);

  const layout = {
    gridTemplateColumns: currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
  };

  const handleMouseLeave = (e) => {
    console.log(e.target.classList);
    setPageId(null);
  };
  // console.log(currentPage);
  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={currentPage ? "submenu show-submenu" : "submenu "}
    >
      <h5>{currentPage?.page}</h5>
      <div className="submenu-links" style={layout}>
        {currentPage?.links?.map((link) => {
          const { id, icon, url, label } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
