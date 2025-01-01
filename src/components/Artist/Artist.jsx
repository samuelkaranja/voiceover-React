import { Link } from "react-router-dom";
import "./artist.css";
import Tape from "../../assets/image/tape.png";

const Artist = () => {
  return (
    <div className="artist">
      <img src={Tape} alt="" />
      <h2>Benjamin</h2>
      <h3>
        Reassuring Kenyan male voice over talent, with the ability to lull you
        into obedience with a flutter of his vocal chords.
      </h3>
      <p>
        Powerful, Persuasive, and Profound: Unleash the captivating charm of
        your project with a personal male voiceover that leaves a lasting
        impression. With my commanding baritone, I bring words to life, adding a
        touch of authority and sincerity to your narration, commercials,
        explainer videos, and more. Whether you seek a voice that exudes
        confidence, warmth, or sheer excitement, I'm your go-to guy. Elevate
        your message with precision, resonance, and impeccable delivery,
        ensuring your audience hangs on to every word. Let's collaborate and
        make your project unforgettable!
      </p>
      <span>
        Don't believe me? <Link to="/">Have a Listen</Link>
      </span>
    </div>
  );
};

export default Artist;
