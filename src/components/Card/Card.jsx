import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  return (
    <div className="card">
      <div className="item">
        <img src={blog?.image} alt={blog?.title} />
        <div className="body">
          <Link to={`/details/${blog?.id}/`}>{blog?.title}</Link>
          <div className="author">
            <small>15 min read</small>
            <small>Author: {blog?.author}</small>
          </div>
          <span>{blog?.description.substring(0, 60) + "..."}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
