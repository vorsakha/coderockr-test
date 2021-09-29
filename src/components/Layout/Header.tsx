import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();

  return (
    <header className="p-1 black text-white shadow fixed w-screen top-0 z-40">
      <div className="px-4 flex flex-row justify-between items-center max-w-6xl mx-auto h-24">
        <div className="text-4xl font-bold">
          <Link to="/" onClick={handleScrollTop}>
            Rockr Blog
          </Link>
        </div>

        <ul className="flex flex-row text-3xl">
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
