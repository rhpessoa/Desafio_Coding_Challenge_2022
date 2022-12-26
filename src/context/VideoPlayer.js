import React from "react";
import { createContext } from "react";
export const VideoPlayerContext = createContext();
export const VideoPlayerProvider = ({ children }) => {
    const [videoPlayer, setVideoPlayer] = React.useState("");
    console.log(videoPlayer);
  return (
    <VideoPlayerContext.Provider value={{ videoPlayer, setVideoPlayer }}>
      {children}
    </VideoPlayerContext.Provider>
  );
};