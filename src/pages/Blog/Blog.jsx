import { Card } from "../../components";
import "./blog.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { blogs } from "../../assets/Blog/Data";

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
  return (
    <div className="blog">
      <div className="popular">
        <h2>Most Popular</h2>
        <Carousel responsive={responsive} swipeable={true} draggable={true}>
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => <Card blog={blog} key={blog.id} />)
          ) : (
            <h2>No Blogs Available</h2>
          )}
        </Carousel>
      </div>
      {/* <div className="technology">
        <h2>Technology</h2>
        <Carousel responsive={responsive} swipeable={true} draggable={true}>
          <Card />
        </Carousel>
      </div> */}
    </div>
  );
};

export default Blog;
