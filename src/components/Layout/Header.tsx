import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import handleBlockScroll from "../../utils/blockScroll";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleScrollTop = () => {
    window.scrollTo(0, 0);

    setOpenMenu(false);
  };

  useEffect(() => {
    openMenu ? handleBlockScroll(true) : handleBlockScroll(false);
  }, [openMenu]);

  const location = useLocation();

  return (
    <header className="p-1 black text-white shadow-lg fixed w-screen top-0 z-40">
      <div className="px-4 flex flex-row justify-between items-center max-w-6xl mx-auto h-24">
        <div className="xl:text-4xl md:text-3xl text-2xl font-bold">
          <Link to="/" onClick={handleScrollTop}>
            Rockr Blog
          </Link>
        </div>

        <div className="sm:hidden">
          <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>

        <ul className="sm:flex hidden flex-row xl:text-3xl md:text-2xl text-xl">
          <li className="px-8">
            <Link to="/">Posts</Link>
          </li>
          <li className="pl-8">
            <Link
              to={{ pathname: "/contact", state: { background: location } }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
