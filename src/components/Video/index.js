import Image from "next/image";
import {
  info,
  title,
  url,
  logoCanal,
  nomeCanal,
  visualizacoes,
  date_time,
  inscritos,
} from "../../../utils/config";
import { VideoContain } from "./styles";
import { VideoPlayerContext } from "../../context/VideoPlayer";
import { useContext, useState } from "react";
export default function Video() {
  const [isVisible, setIsVisible] = useState(false);

  const handlerIsVisible = () => {
    if (isVisible) {
      setIsVisible(false);
    } else setIsVisible(true);
  };
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
              <a onClick={() => handlerIsVisible()}>
                <div className="Alcance__Dados">
                  <span>{videoPlayer.visualizacoes}M de visualizações</span>
                  <span>há {videoPlayer.date_time}</span>
                  {isVisible && (
                    <p className="Sobre__video">{videoPlayer.info}</p>
                  )}
                  {isVisible ? (
                    <p className="Video_show">Mostrar menos</p>
                  ) : (
                    <p className="Video_show">Mostrar mais</p>
                  )}
                </div>
              </a>
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
                    <p className="Canal__Inscrito">
                      {videoPlayer.inscritos}M inscritos
                    </p>
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
              src={url}
              title="YouTube video player"
              allowFullScreen
            />
          </section>
          <section className="Info__Video">
            <div>
              <h2 className="Video__Titulo">{title}</h2>
            </div>

            <div className="Video__Alcance">
              <a onClick={() => handlerIsVisible()}>
                <div className="Alcance__Dados">
                  <span>{visualizacoes}</span>
                  <span>{date_time}</span>
                  {isVisible && <p className="Sobre__video">{info}</p>}
                  {isVisible ? (
                    <p className="Video_show">Mostrar menos</p>
                  ) : (
                    <p className="Video_show">Mostrar mais</p>
                  )}
                </div>
              </a>
              <div className="Canal__Status">
                <section>
                  <Image
                    width={40}
                    height={40}
                    className="Info__Image"
                    src={logoCanal}
                    alt="Logo do canal"
                  />
                  <div className="Canal__dados">
                    <p className="Canal__Nome">{nomeCanal}</p>
                    <p className="Canal__Inscrito">{inscritos}</p>
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
