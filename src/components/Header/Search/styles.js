import styled from "styled-components";
export const StyledSearch = styled.div`
  display: flex;
  margin: auto auto;
  flex-direction: row;
  border: 1px solid #0f0f0f;
  max-width: 530px;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  input {
    width: 85%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: white;
    background-color: #2b2a33;
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: #2b2a33;
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid #0f0f0f;
    width: 40px;
    height: 40px;
  }
`;
