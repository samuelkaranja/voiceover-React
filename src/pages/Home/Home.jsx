import { Banner, Clients, Intro, News, Studio } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <>
      <Banner />
      <Intro />
      <Clients />
      <Studio />
      <News />
    </>
  );
};

export default Home;
