import Header from "../src/components/Header";
import Video from "../src/components/Video";
import Sugerido from "../src/components/Sugerido";
import styled from "styled-components";
import config from "../config.json";
const ContainerHome = styled.div`
  height: 100vh;
  background-color: #0f0f0f;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "Header"
    "Video"
    "Sugerido";
  .Header {
    grid-area: Header;
  }
  .Video {
    grid-area: Video;
  }
  .Sugerido {
    grid-area: Sugerido;
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 3fr minmax(500px, 1fr);
    grid-template-rows: 56px 1fr;
    grid-template-areas:
      "Header" "header"
      "Video" "sugerido"
      "video" "sugerido";
    .Sugerido {
      grid-row-start: 2;
      grid-column-start: 2;
    }
  }
`;
export default function Home() {
  return (
    <ContainerHome>
      <Header />
      <Video config={config} />
      <Sugerido config={config} />
    </ContainerHome>
  );
}
