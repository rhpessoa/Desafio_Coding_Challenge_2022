import styled from "styled-components";

export const SugeridoContain = styled.div`
  overflow: auto;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  .Image {
    width: 100vw;
    height: 25vh;
  }
  .Info__Image {
    border-radius: 50%;
  }
  .Titulo__Video-sugerido {
    font-size: 13px;
  }
  .Canal__Nome-sugerido {
    font-size: 10px;
    color: #a9a9a9;
  }
  .Contain__Info {
    display: flex;
    align-items: center;
    padding: 0.5em;
  }
  .Contain__Dados {
    display: flex;
    flex-direction: column;
    margin-left: 0.5em;
    .Info__Canal-sugerido {
      display: flex;
      color: #a9a9a9;
      margin-top: 0.2em;
    }
    span {
      font-size: 10px;
      margin-right: 0.8em;
    }
  }
`;
