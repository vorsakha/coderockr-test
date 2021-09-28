import { ReactNode } from "react";
import { Link } from "react-router-dom";

const PostsLink = ({ to, children }: { to: string; children: ReactNode }) => {
  return (
    <Link className="" to={to}>
      {children}
    </Link>
  );
};

export default PostsLink;
