import "./news.css";
import { blogs } from "../../assets/Blog/Data";
import Card from "../Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const News = () => {
  return (
    <div className="news">
      <h2>From the blog</h2>
      <Carousel responsive={responsive} swipeable={true} draggable={true}>
        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 3).map((blog) => <Card blog={blog} key={blog.id} />)
        ) : (
          <h2>No blogs found</h2>
        )}
      </Carousel>
    </div>
  );
};

export default News;
