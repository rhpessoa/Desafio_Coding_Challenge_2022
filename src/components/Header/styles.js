import styled from "styled-components";

export const HeaderContain = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    position: fixed;
    display: flex;
    height: 56px;
    background: black;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
    padding-left:2em;
  }
`;
