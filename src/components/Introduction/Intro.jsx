import "./intro.css";
import Tape from "../../assets/image/tape.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="more">
        <h4>
          The reassuring voice you’ve been yearning for (even though you weren’t
          aware you were)
        </h4>
        <img src={Tape} alt="Tape image" />
        <p>
          Ready to embark on an auditory journey like no other? Click that link
          and immerse yourself in a world of mesmerizing voiceover prowess. From
          the first syllable to the final breath, my voice will take you on an
          unforgettable ride through a symphony of emotions and storytelling.
          Get ready to experience a captivating blend of power, versatility, and
          sheer talent that will leave you craving for more. So, what are you
          waiting for? Don't just read about it, hear it for yourself! Click now
          and let my voiceover demos transport you to a realm of audio
          excellence.
        </p>
      </div>
      <button>Listen to Benjamin</button>
    </div>
  );
};

export default Intro;
