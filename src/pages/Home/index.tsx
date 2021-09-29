import { useEffect, useRef, useState } from "react";
import Posts from "../../components/Posts";

const Home = () => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [page, setPage] = useState<number>(1);

  // inf scroll
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
      <Posts setElement={setElement} page={page} />
    </div>
  );
};

export default Home;
