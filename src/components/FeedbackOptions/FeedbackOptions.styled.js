import styled from "styled-components";

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const StyledButton = styled.button`
  border-radius: 4px;
  border: 1px solid grey;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-size: 14px;

  ::first-letter {
    text-transform: uppercase;
  }

  :hover {
    background-color: #3b4ee0;
  }
`;

export { StyledButtonsWrapper, StyledButton };
