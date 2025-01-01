import "./audioplayer.css";
import ReactAudioPlayer from "react-audio-player";
import Wave from "../../assets/image/audio.png";

const AudioPlayer = ({ audio }) => {
  return (
    <div className="player">
      <div className="i">
        <img src={Wave} alt="" />
      </div>
      <ReactAudioPlayer src={audio.music} autoPlay={false} controls />
      <span>{audio.title}</span>
    </div>
  );
};

export default AudioPlayer;
