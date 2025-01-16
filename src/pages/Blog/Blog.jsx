import "./blog.css";
import { Card } from "../../components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { GlobalContext } from "../../Context/Context";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Blog = () => {
  const { news } = useContext(GlobalContext);

  return (
    <div className="blog">
      <div className="popular">
        <h2>Most Popular</h2>
        <Carousel responsive={responsive} swipeable={true} draggable={true}>
          {news && news.length > 0 ? (
            news.map((blog) => <Card blog={blog} key={blog.id} />)
          ) : (
            <h2>No Blogs Available</h2>
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default Blog;
