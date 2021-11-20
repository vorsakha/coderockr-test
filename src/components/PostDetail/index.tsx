import { useEffect, useState } from "react";
import Loading from "../common/LoadingSpinner";
import handleDate from "../../utils/formatDate";
import useFetchPost from "../../hooks/useFetchPost";
import { useHistory } from "react-router";

const PostDetail = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const { post, error } = useFetchPost();

  const history = useHistory();

  useEffect(() => {
    if (error) {
      history.push(`/404`);
    }
  }, [error, history]);

  return (
    <div className="flex justify-center items-center min-h-partial flex-wrap md:px-6">
      {post === null || post === undefined ? (
        <Loading />
      ) : (
        <div className="relative bg-white max-w-6xl mx-auto shadow-lg md:my-8">
          <div className="flex lg:flex-row flex-col">
            {!imageLoaded && <Loading />}

            <img
              className="min-w-half h-60 sm:h-80 md:h-96 lg:h-full w-full lg:max-w-half object-cover"
              src={post.imageUrl}
              alt={post.title}
              onLoad={() => setImageLoaded(true)}
            />

            <div className="min-w-half lg:max-w-half w-full h-full flex flex-col max-w-4xl self-center items-start px-4 md:px-16 md:mt-16 mt-4">
              <small className="pb-8 text-lg">{handleDate(post.date)}</small>
              <p className="p-0 pb-8 text-xl">{post.author}</p>
              <h1 className="pb-8 text-4xl text-yellow font-bold">
                {post.title}
              </h1>
            </div>
          </div>

          <article className="lg:py-24 px-4 md:px-16 paragraph max-w-4xl mx-auto mb-4 lg:mb-0">
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
