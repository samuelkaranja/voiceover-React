import "./blogdetails.css";
import { useParams } from "react-router-dom";
import { blogs } from "../../assets/Blog/Data";

const BlogDetails = () => {
  const { id } = useParams();
  console.log(id);

  const blogdetails = blogs.find((blog) => blog.id === parseInt(id));

  if (!blogdetails) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="details">
      <img src={blogdetails?.image} alt="" />
      <h2>{blogdetails?.title}</h2>
      <p>{blogdetails?.description}</p>
    </div>
  );
};

export default BlogDetails;
