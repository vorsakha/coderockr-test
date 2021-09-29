import { Link, useLocation } from "react-router-dom";
import Close from "../common/Close";
import Menu from "../common/Menu";

const MobileMenu = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: (boolean: boolean) => void;
}) => {
  const location = useLocation();

  return (
    <>
      {openMenu ? (
        <Close
          onClick={() => {
            setOpenMenu(false);
          }}
        />
      ) : (
        <Menu onClick={() => setOpenMenu(true)} />
      )}

      {openMenu && (
        <div className="flex items-center text-center justify-center absolute top-0 right-0 mt-24 w-screen h-screen text-2xl">
          <ul className="-mt-24 black w-screen min-h-partial flex flex-col justify-center">
            <li className="py-8">
              <Link
                to="/"
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                Posts
              </Link>
            </li>
            <li className="py-8">
              <Link
                to={{
                  pathname: "/contact",
                  state: { background: location },
                }}
                onClick={() => {
                  setOpenMenu(false);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
