import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../common/LoadingSpinner";
import handleDate from "../../utils/formatDate";

const PostDetail = () => {
  const [post, setPost] = useState<PostTypes | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const source = axios.CancelToken.source();
    let mounted = true;

    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          `https://stormy-shelf-93141.herokuapp.com/articles?id=${id}`
        );

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
