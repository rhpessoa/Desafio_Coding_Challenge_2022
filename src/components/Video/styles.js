import styled from "styled-components";

export const VideoContain = styled.div`
font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  .Iframe__Video {
    width: 100vw;
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
  }
  .Canal__Status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    section{
      display:flex;
      align-items: center;
    }
    .Canal__Nome {
      font-weight: 700;
      margin-left: 0.5em;
      font-size: 11px
    }
    .Canal__Inscrito {
      font-size: 11px;
      color: #a9a9a9;
      margin-left: 0.5em;
    }
    .Info__Image {
      border-radius:50%;
    }
    .Video__Botao {
      justify-self:end;
      padding: 0.5em;
      background-color: white;
      color: black;
      border-radius: 15px;
      font-size:13px;
      cursor: pointer;
      transition: 0.5ms;
    }
  }
`;
