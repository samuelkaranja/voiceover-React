import "./sociallinks.css";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className="sociallinks">
      <div className="social">
        <h2>Get in touch with Benjamin</h2>
        <span>You can get in touch with Benjamin via his agent at</span>
        <span>
          Email: <b>bengatx78@gmail.com</b>
        </span>
        <span>
          Tel: <b>0793592560</b>
        </span>
        <p>
          Or direct at: <b>bengatx78@gmail.com</b>
        </p>
        <h4>Social Media Links</h4>
        <ul>
          <li>
            <Link to="/">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaXTwitter />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaInstagramSquare />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaPinterestP />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
