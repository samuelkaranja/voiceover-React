import "./blogdetails.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../Context/Context";

const BlogDetails = () => {
  const { id } = useParams();
  const { news } = useContext(GlobalContext);

  const blogdetails = news.find((blog) => blog.id === parseInt(id));

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
