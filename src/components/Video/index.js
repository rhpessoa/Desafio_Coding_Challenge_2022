import Image from "next/image";
import { VideoContain } from "./styles";
import { VideoPlayerContext } from "../../context/VideoPlayer";
import { useContext } from "react";
export default function Video({ config }) {
  const { videoPlayer } = useContext(VideoPlayerContext);
  return (
    <>
      {videoPlayer ? (
        <VideoContain className="Video">
          <section>
            <iframe
              className="Iframe__Video"
              frameBorder="0"
              src={videoPlayer.url}
              title="YouTube video player"
              allowFullScreen
            />
          </section>
          <section className="Info__Video">
            <div>
              <h2 className="Video__Titulo">{videoPlayer.title}</h2>
              <div className="Video__Alcance">
                <span>{videoPlayer.visualizacoes} de visualizações</span>
                <span>há {videoPlayer.date_time}</span>
              </div>
            </div>
            <div className="Canal__Status">
              <section>
              <Image
                width={25}
                height={25}
                className="Info__Image"
                src={videoPlayer.logoCanal}
                alt="Logo do canal"
              />
              <p className="Canal__Nome">{videoPlayer.nomeCanal}</p>
              <p className="Canal__Inscrito">{videoPlayer.inscritos}</p>
              </section>
              <a className="Video__Botao">Inscreva-se</a>
            </div>
          </section>
        </VideoContain>
      ) : (
        <VideoContain className="Video">
          <section>
            <iframe
              className="Iframe__Video"
              frameBorder="0"
              src={config.url}
              title="YouTube video player"
              allowFullScreen
            />
          </section>
          <section className="Info__Video">
            <div>
              <h2 className="Video__Titulo">{config.title}</h2>
              <div className="Video__Alcance">
                <span>{config.visualizacoes}</span>
                <span>{config.date_time}</span>
              </div>
            </div>
            <div className="Canal__Status">
              <section>
              <Image
                width={25}
                height={25}
                className="Info__Image"
                src={config.logoCanal}
                alt="Logo do canal"
              />
              <p className="Canal__Nome">{config.nomeCanal}</p>
              <p className="Canal__Inscrito">{config.inscritos}</p>
              </section>
              <a className="Video__Botao">Inscreva-se</a>
            </div>
          </section>
        </VideoContain>
      )}
    </>
  );
}
