import "../styles/globals.css";
import { VideoPlayerProvider } from "../src/context/VideoPlayer";

export default function App({ Component, pageProps }) {
  return (
    <VideoPlayerProvider>
      <Component {...pageProps} />
    </VideoPlayerProvider>
  );
}
