import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Loading from "../common/LoadingSpinner";
import PostsLink from "./PostsLink";
import PostsIconLink from "./PostsIcon";
import handleLimitString from "../../utils/limitString";

const Posts = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const res = await axios.get(
        `https://stormy-shelf-93141.herokuapp.com/articles?_page=${page}&_limit=6`
      );

      if (posts.length !== 0) {
        setPosts((posts) => [...posts, ...res.data]);
        setLoading(false);
        return;
      }

      setPosts(res.data);
      setLoading(false);
      return;
    };

    fetchPosts();
  }, [page]);

  const pageRef = useRef(page);

  useEffect(() => {
    if (page !== 4) pageRef.current = page;
  }, [page]);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const refElement = entries[0];
        if (refElement.isIntersecting) {
          setPage(pageRef.current + 1);
        }
      },
      { threshold: 0.8 }
    )
  );

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <div>
      {posts.length === 0 ? (
        <Loading />
      ) : (
        <>
          <ul className="grid grid-cols-6 gap-y-14 py-14">
            {posts.map((item, idx) => (
              <li
                ref={posts.length === idx + 1 ? setElement : null}
                className={`${
                  (idx + 1) % 3 === 0 ? `col-span-4 h-160` : `col-span-3 h-80`
                }
              ${
                (idx + 1) % 3 === 0 && (idx + 1) % 2 === 0 ? `col-start-3` : ``
              } bg-white w-full flex flex-row relative shadow`}
                key={item.id}
              >
                {!imageLoaded && (
                  <div className="h-full w-full max-w-half bg-gray-500"></div>
                )}
                <img
                  className="h-full max-w-half object-cover"
                  src={item.imageUrl}
                  alt={item.title}
                  onLoad={() => setImageLoaded(true)}
                />
                <div className="flex flex-col p-8 justify-center">
                  <p className="text-md py-2">{item.author}</p>
                  <PostsLink to={`/post/${item.id}`}>{item.title}</PostsLink>
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
          {loading ? <Loading /> : null}
        </>
      )}
    </div>
  );
};

export default Posts;
