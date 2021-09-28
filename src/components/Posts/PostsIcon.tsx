import { Link } from "react-router-dom";
import icon from "../../assets/icon.svg";

const PostsIconLink = ({ to }: { to: string }) => {
  return (
    <Link className="ml-auto absolute bottom-0 right-0 p-6" to={to}>
      <img src={icon} alt="Go to article" />
    </Link>
  );
};

export default PostsIconLink;
