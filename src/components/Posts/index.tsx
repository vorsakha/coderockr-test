import { Dispatch, SetStateAction, useState } from "react";
import Loading from "../common/LoadingSpinner";
import PostsLink from "./PostsLink";
import PostsIconLink from "./PostsIcon";
import handleLimitString from "../../utils/limitString";
import useFetchPosts from "../../hooks/useFetchPosts";

const Posts = ({
  setElement,
  page,
}: {
  setElement: Dispatch<SetStateAction<HTMLElement | null>>;
  page: number;
}) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const { posts, loading } = useFetchPosts(page);

  return (
    <div className="flex flex-col justify-center items-center min-h-partial">
      {posts.length === 0 ? (
        <Loading />
      ) : (
        <>
          {!imageLoaded && (
            <Loading className="fixed top-20 right-0 z-50 p-4" />
          )}
          <ul className="flex flex-col lg:grid lg:grid-cols-6 lg:gap-y-14 gap-y-4 py-5 lg:py-16 px-4 md:px-0">
            {posts.map((item, idx) => (
              <li
                ref={posts.length === idx + 1 ? setElement : null}
                className={`${
                  (idx + 1) % 3 === 0
                    ? `col-span-6 2xl:col-span-4 lg:h-160`
                    : `col-span-6 2xl:col-span-3 lg:h-80`
                }
              ${
                (idx + 1) % 3 === 0 && (idx + 1) % 2 === 0
                  ? `col-span-6 2xl:col-start-3`
                  : ``
              } bg-white w-full flex flex-col lg:flex-row relative shadow-lg`}
                key={item.id}
              >
                <img
                  className="h-60 md:h-96 lg:h-full lg:max-w-half object-cover"
                  src={item.imageUrl}
                  alt={item.title}
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="flex flex-col p-4 sm:p-8 justify-center">
                  <p className="text-md p-0 py-2">{item.author}</p>
                  <PostsLink to={`/post/${item.id}`}>
                    {handleLimitString(item.title, 47)}
                  </PostsLink>
                  <div className="text-md py-2">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: handleLimitString(item.article),
                      }}
                    />
                  </div>
                  <PostsIconLink to={`/post/${item.id}`} />
                </div>
              </li>
            ))}
          </ul>
          {loading ? <Loading bot /> : null}
        </>
      )}
    </div>
  );
};

export default Posts;
