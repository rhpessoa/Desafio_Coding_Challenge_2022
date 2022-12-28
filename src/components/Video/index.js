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
          <section className="Video__Box">
            <iframe
              className="Iframe__Video"
              width="100%"
              frameBorder="0"
              src={videoPlayer.url}
              title="YouTube video player"
              allowFullScreen
            />
          </section>
          <section className="Info__Video">
            <div>
              <h2 className="Video__Titulo">{videoPlayer.title}</h2>
            </div>
            <div className="Video__Alcance">
              <div className="Alcance__Dados">
                <span>{videoPlayer.visualizacoes} de visualizações</span>
                <span>há {videoPlayer.date_time}</span>
                <p className="Sobre__video">
                {videoPlayer.info}
                </p>
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
                  <div className="Canal__dados">
                    <p className="Canal__Nome">{videoPlayer.nomeCanal}</p>
                    <p className="Canal__Inscrito">{videoPlayer.inscritos} inscritos</p>
                  </div>
                </section>
                <a className="Video__Botao">Inscreva-se</a>
              </div>
            </div>
          </section>
        </VideoContain>
      ) : (
        <VideoContain className="Video">
          <section className="Video__Box">
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
            </div>
            <div className="Video__Alcance">
              <div className="Alcance__Dados">
                <span>{config.visualizacoes}</span>
                <span>{config.date_time}</span>
                <p className="Sobre__video">
                {config.info}
                </p>
              </div>
              <div className="Canal__Status">
                <section>
                  <Image
                    width={40}
                    height={40}
                    className="Info__Image"
                    src={config.logoCanal}
                    alt="Logo do canal"
                  />
                  <div className="Canal__dados">
                    <p className="Canal__Nome">{config.nomeCanal}</p>
                    <p className="Canal__Inscrito">{config.inscritos}</p>
                  </div>
                </section>
                <a className="Video__Botao">Inscreva-se</a>
              </div>
            </div>
          </section>
        </VideoContain>
      )}
    </>
  );
}
