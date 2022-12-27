import styled from "styled-components";

export const VideoContain = styled.div`
 background-color: #0f0f0f;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  .Iframe__Video {
    width: 100%;
    height: 40vh;
  }
  .Info__Video {
    padding: 0.5em;
  }
  .Video__Titulo {
    font-size: 14px;
    font-weight: 700;
  }
  .Video__Alcance {
    span {
      font-size: 10px;
      color: #a9a9a9;
    }
    span:first-child {
      margin-right: 0.8em;
    }
    .Sobre__video {
      display: none;
    }
  }
  .Canal__Status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .Canal__dados {
      display: flex;
    }
    section {
      display: flex;
      align-items: center;
    }
    .Canal__Nome {
      font-weight: 700;
      margin-left: 0.5em;
      font-size: 11px;
    }
    .Canal__Inscrito {
      font-size: 11px;
      color: #a9a9a9;
      margin-left: 0.5em;
    }
    .Info__Image {
      border-radius: 50%;
      width: 25px;
      height: 25px;
    }
    .Video__Botao {
      padding: 0.5em;
      background-color: white;
      color: black;
      border-radius: 15px;
      font-size: 13px;
      cursor: pointer;
      transition: 0.5ms;
    }
  }
  @media screen and (min-width: 768px) {
  
    .Video__Box {
      padding: 0 1.5em;
      margin-top:4.5em;
    }
    .Info__Video {
    
      padding: 1.5em;
      .Video__Alcance {
        display: flex;
        flex-direction: column-reverse;
        section {
          padding-top: 0.5em;
        }
      }
    }
    .Video__Titulo {
      font-size: 18px;
    }
    .Video__Alcance {
      span {
        font-size: 14px;
        color: white;
        font-weight: bold;
      }
      .Alcance__Dados {
        margin-top: 0.5em;
        padding: 1em;
        width: 100%;
        background-color: #272727;
        border-radius: 10px;
      }
      .Sobre__video {
        display: block;
        padding: 0.2em 0;
        font-size: 14px;
        font-family: "Roboto", "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.4em;
      }
    }
    .Canal__Status {
      display: flex;
      align-items: center;
      justify-content: left;
      margin: 0.3em 0;
      section {
        margin-right: 1.5em;
      }
      .Canal__dados {
        display: flex;
        flex-direction: column;
      }
      .Canal__Nome {
        font-size: 14px;
      }
      .Canal__Inscrito {
        font-size: 14px;
      }
      .Info__Image {
        width: 40px;
        height: 40px;
      }
      .Video__Botao {
        padding: 0.8em;
        background-color: white;
        color: black;
        border-radius: 20px;
        font-size: 13px;
        cursor: pointer;
        transition: 0.5ms;
      }
    }
  }
`;
