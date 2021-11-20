import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const useFetchPost = () => {
  const [post, setPost] = useState<PostTypes | null>(null);
  const [error, setError] = useState<boolean>(false);

  console.log(error);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const source = axios.CancelToken.source();
    let mounted = true;

    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          `https://stormy-shelf-93141.herokuapp.com/articles?id=${id}`
        );

        // * new *
        // if fetch comes with no data, the id must be wrong, so error = true
        if (res.data.length === 0) {
          setError(true);
        }

        if (mounted) {
          setPost(res.data[0]);
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          mounted = false;
        } else {
          throw error;
        }
      }
    };

    fetchPosts();

    return () => {
      source.cancel();
      mounted = false;
    };
  }, [id]);

  return { post, error };
};

export default useFetchPost;
