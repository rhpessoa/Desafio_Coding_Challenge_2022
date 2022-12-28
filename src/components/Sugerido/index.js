import { SugeridoContain } from "./styles";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { VideoPlayerContext } from "../../context/VideoPlayer";
export default function Sugerido({ config }) {
  const videos = config.playlists.Musica;
  const { setVideoPlayer } = useContext(VideoPlayerContext);
  return (
    <SugeridoContain className="Sugerido">
      {videos.map((video) => {
        return (
          <a
            className="Button"
            key={video.thumb}
            onClick={() => {
              setVideoPlayer(video);
            }}
          >
            <div className="Contain__Sugeridos">
              <div className="Contain__Image">
                <Image
                  width={767}
                  height={0}
                  className="Image"
                  src={video.thumb}
                  alt="Thumbnail do vídeo"
                />
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
                    <div className="Dados__Canal">
                      <span className="Canal__Nome-sugerido">
                        {video.nomeCanal}
                      </span>
                      <div>
                        <span>{video.visualizacoes} de visualizações</span>
                        <span>há {video.date_time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </a>
        );
      })}
    </SugeridoContain>
  );
}
