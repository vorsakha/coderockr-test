import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetchPosts = (page: number) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<PostTypes[]>([]);

  const fetchPosts = useCallback(async () => {
    setLoading(true);

    const res = await axios.get(
      `https://stormy-shelf-93141.herokuapp.com/articles?_page=${page}&_limit=6`
    );

    setPosts((posts) => [...posts, ...res.data]);
    setLoading(false);
    return;
  }, [page]);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      fetchPosts();
    }

    const source = axios.CancelToken.source();

    return () => {
      source.cancel();
      mounted = false;
    };
  }, [fetchPosts]);

  return { posts, loading };
};

export default useFetchPosts;
