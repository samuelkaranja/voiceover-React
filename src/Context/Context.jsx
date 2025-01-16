import { createContext, useState } from "react";
import { blogs } from "../assets/Blog/Data";
import { audios, videos } from "../assets/Gallery/data";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [news, setNews] = useState(blogs);
  const [sounds, setSounds] = useState(audios);
  const [clips, setClips] = useState(videos);

  console.log(news);

  return (
    <GlobalContext.Provider value={{ news, sounds, clips }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
