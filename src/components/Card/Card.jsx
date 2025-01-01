import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  return (
    <div className="card">
      <div className="item">
        <img src={blog?.image} alt={blog?.title} />
        <div className="body">
          <Link to={`/details/${blog?.id}/`}>{blog?.title}</Link>
          <small>15 min read</small>
          <span>{blog?.description.substring(0, 60) + "..."}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
