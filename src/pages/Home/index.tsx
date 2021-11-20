import Posts from "../../components/Posts";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const Home = () => {
  const { setElement, page } = useInfiniteScroll();

  return (
    <div>
      <Posts setElement={setElement} page={page} />
    </div>
  );
};

export default Home;
