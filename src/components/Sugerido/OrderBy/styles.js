import styled from "styled-components";

export const ContainOrderBy = styled.div`
  display: flex;
  margin-bottom: 1em;
  .OrderBy__button {
    border-radius: 10px;
    padding: 0.5em;
    margin-right: 0.5em;
    background-color: #272727;
    cursor: pointer;
  }
  .OrderBy__button:hover {
    background-color: #303030;
  }
  @media screen and (min-width: 768px) {
    margin-left:1.5em;
  }
  @media screen and (min-width: 1024px) {
    margin-left:0;
  }
`;
