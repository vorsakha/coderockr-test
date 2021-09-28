import { Link } from "react-router-dom";

const Header = () => {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div>
        <Link to="/" onClick={handleScrollTop}></Link>Rockr Blog
      </div>

      <ul>
        <li>
          <Link to="/">Posts</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
