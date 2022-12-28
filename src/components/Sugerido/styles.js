import styled from "styled-components";
export const SugeridoContain = styled.div`
  background-color: #0f0f0f;
  overflow: auto;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  .Image {
    width: 100%;
    height: 25vh;
  }
  .Button{
    cursor: pointer;
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
      font-size: 12px;
      margin-right: 0.8em;
    }
  }
  @media screen and (min-width: 768px) {
    overflow: unset;
    .Contain__Sugeridos {
      display: flex;
      flex-direction: row;
      margin-left: 1.5em;
    }
    .Image {
      width: 168px;
      height: 94px;
      border-radius: 10px;
    }
    .Info__Image {
      display: none;
    }
    .Dados__Canal {
    }
  }
  @media screen and (min-width: 1024px) {
    overflow: scroll;
    padding-top: 1.5em;
    .Contain__Sugeridos {
      margin-left: 0;
      margin-bottom: 0.3em;
    }
  }
`;
