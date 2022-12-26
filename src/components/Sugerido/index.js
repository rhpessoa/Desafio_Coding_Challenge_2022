import { SugeridoContain } from "./styles";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { VideoPlayerContext } from "../../context/VideoPlayer";
export default function Sugerido({ config }) {
  const videos = config.playlists.Musica;
  const { setVideoPlayer } = useContext(VideoPlayerContext);
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    },2);
};
  return (
    <SugeridoContain className="Sugerido">
      {videos.map((video) => {
        return (
          <div className="Contain__Sugeridos" key={video.thumb}>
            <div className="Contain__Image">
              <a
                onClick={() => {
                  setVideoPlayer(video),
                  goToTop(),
                  console.log("aqui");
                }}
              >
                <Image
                  width={767}
                  height={0}
                  className="Image"
                  src={video.thumb}
                  alt="Thumbnail do vídeo"
                />
              </a>
            </div>
            <section className="Contain__Info">
              <div>
                <Image
                  width={25}
                  height={25}
                  className="Info__Image"
                  src={video.logoCanal}
                  alt="Logo do canal"
                />
              </div>
              <div className="Contain__Dados">
                <h1 className="Titulo__Video-sugerido">{video.title}</h1>
                <div className="Info__Canal-sugerido">
                  <span className="Canal__Nome-sugerido">
                    {video.nomeCanal}
                  </span>
                  <span>{video.visualizacoes} visualizações</span>
                  <span>há {video.date_time}</span>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </SugeridoContain>
  );
}
