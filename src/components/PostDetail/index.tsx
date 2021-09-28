import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../common/LoadingSpinner";
import handleDate from "../../utils/formatDate";

const PostDetail = () => {
  const [post, setPost] = useState<PostTypes | null>(null);

  const { id } = useParams<{ id: string }>();

  const fetchPosts = async () => {
    const res = await axios.get(
      `https://stormy-shelf-93141.herokuapp.com/articles?id=${id}`
    );

    setPost(res.data[0]);
  };

  const memoizedCall = useCallback(fetchPosts, [id]);

  useEffect(() => {
    memoizedCall();
  }, [memoizedCall]);

  return (
    <div>
      {post === null ? (
        <Loading />
      ) : (
        <>
          <div>
            <img src={post.imageUrl} alt={post.title} />
          </div>
          <div>
            <small>{handleDate(post.date)}</small>
            <p>{post.author}</p>
            <h1>{post.title}</h1>
          </div>

          <article>
            <div
              dangerouslySetInnerHTML={{
                __html: post.article,
              }}
            />
          </article>
        </>
      )}
    </div>
  );
};

export default PostDetail;
