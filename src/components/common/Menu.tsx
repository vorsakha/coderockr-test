import { GiHamburgerMenu as MenuIcon } from "@react-icons/all-files/gi/GiHamburgerMenu";

const Menu = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="text-3xl p-2">
      <MenuIcon />
    </button>
  );
};

export default Menu;
