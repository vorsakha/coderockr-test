import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Loading from "../common/LoadingSpinner";

const Posts = ({ limit = 10 }: { limit?: number }) => {
  const [posts, setPosts] = useState<PostsTypes[] | null>(null);

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
        posts.map((item) => (
          <ul key={item.id}>
            <li>{item.title}</li>
          </ul>
        ))
      )}
    </div>
  );
};

export default Posts;
