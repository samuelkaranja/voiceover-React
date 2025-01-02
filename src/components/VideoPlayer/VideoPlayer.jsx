import "./videoplayer.css";
import ReactPlayer from "react-player";

const VideoPlayer = ({ video }) => {
  return (
    <div className="videoplayer">
      <ReactPlayer
        url={video.watch}
        controls
        width="90%"
        height="100%"
        className="vid"
      />
      <span>{video.title}</span>
    </div>
  );
};

export default VideoPlayer;
