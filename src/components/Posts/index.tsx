import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Loading from "../common/LoadingSpinner";
import PostsLink from "./PostsLink";

const Posts = ({ limit = 6 }: { limit?: number }) => {
  const [posts, setPosts] = useState<PostTypes[] | null>(null);

  const fetchPosts = async () => {
    const res = await axios.get(
      `https://stormy-shelf-93141.herokuapp.com/articles?_limit=${limit}`
    );

    setPosts(res.data);
  };

  const memoizedCall = useCallback(fetchPosts, [limit]);

  useEffect(() => {
    memoizedCall();
  }, [memoizedCall]);

  return (
    <div>
      {posts === null ? (
        <Loading />
      ) : (
        <ul className="grid grid-cols-6 gap-y-10 py-10">
          {posts.map((item, idx) => (
            <li
              className={`${
                (idx + 1) % 3 === 0 ? `col-span-4 h-160` : `col-span-3 h-80`
              }
              ${
                (idx + 1) % 3 === 0 && (idx + 1) % 2 === 0 ? `col-start-3` : ``
              } bg-white w-full`}
              key={item.id}
            >
              <PostsLink to={`/post/${item.id}`}>{item.title}</PostsLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
