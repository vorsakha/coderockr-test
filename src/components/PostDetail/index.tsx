import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../common/LoadingSpinner";
import handleDate from "../../utils/formatDate";

const PostDetail = () => {
  const [post, setPost] = useState<PostTypes | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

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
    <div className="flex justify-center items-center min-h-partial flex-wrap">
      {post === null ? (
        <Loading />
      ) : (
        <div className="relative bg-white max-w-6xl mx-auto shadow my-8">
          <div className="flex">
            {!imageLoaded && (
              <div className="h-full w-full max-w-half bg-gray-500"></div>
            )}

            <div className="min-w-half max-w-half object-cover">
              <img
                src={post.imageUrl}
                alt={post.title}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            <div className="min-w-half max-w-half h-full flex flex-col self-center items-start p-16">
              <small className="pb-8 text-lg">{handleDate(post.date)}</small>
              <p className="p-0 pb-8 text-xl">{post.author}</p>
              <h1 className="pb-8 text-4xl text-yellow font-bold">
                {post.title}
              </h1>
            </div>
          </div>

          <article className="py-24 paragraph max-w-3xl mx-auto">
            <div
              dangerouslySetInnerHTML={{
                __html: post.article,
              }}
            />
          </article>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
