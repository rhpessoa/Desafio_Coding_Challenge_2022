import { GlobalStyle } from "../src/components/GlobalStyle";
import { VideoPlayerProvider } from "../src/context/VideoPlayer";

export default function App({ Component, pageProps }) {
  return (
    <VideoPlayerProvider>
      <GlobalStyle/>
      <Component {...pageProps} />
    </VideoPlayerProvider>
  );
}
