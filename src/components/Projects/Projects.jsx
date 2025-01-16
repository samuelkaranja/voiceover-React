import "./projects.css";
import Tape from "../../assets/image/tape.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { useContext } from "react";
import { GlobalContext } from "../../Context/Context";

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

const Projects = () => {
  const { sounds, clips } = useContext(GlobalContext);

  return (
    <div className="projects">
      <div className="image">
        <img src={Tape} alt="" />
      </div>
      <h2>Watch and Listen to Benjamin's Showreels</h2>
      <div className="tb">
        <Tabs>
          <TabList>
            <Tab>Audio</Tab>
            <Tab>Video</Tab>
          </TabList>

          <TabPanel>
            <div className="topics">
              <h3>News</h3>
              <div className="show">
                <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={true}
                >
                  {sounds && sounds.length > 0 ? (
                    sounds.map((audio) => (
                      <AudioPlayer audio={audio} key={audio.id} />
                    ))
                  ) : (
                    <h2>No Audios Found!!</h2>
                  )}
                </Carousel>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h3>News</h3>
            <div className="p">
              <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
              >
                {clips && clips.length > 0 ? (
                  clips.map((video) => (
                    <VideoPlayer video={video} key={video.id} />
                  ))
                ) : (
                  <h2>No Videos Found!</h2>
                )}
              </Carousel>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
