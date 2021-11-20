import { useEffect, useRef, useState } from "react";

const useInfiniteScroll = () => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [page, setPage] = useState<number>(1);

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

  return { setElement, page };
};

export default useInfiniteScroll;
