import styled from "styled-components";

export const Fieldset = styled.fieldset`
  border-radius: 5px;
  border: 2px solid #ccc;
  margin: 5px 5px;
  text-align: center;
`;

export const StyledForm = styled.form`
  background-color: rgb(237, 247, 192);
  padding: 10px;
`;

export const Exchange = styled.p`
  font-size: 9px;
  color: rgb(83, 105, 82);
  text-align: center;
`;

export const Legend = styled.legend`
  position: relative;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #ccc;
  background-color: rgba(128, 255, 0, 0.22);
  color: rgb(4, 54, 15);
`;

export const StyledInput = styled.input`
  margin-top: 10px;
  border: 2px solid #ccc;
  padding: 10px;
  width: 100%;
  max-width: 350px;
  text-align: center;
  border-radius: 5px;

  &:required {
    background-color: beige;
  }

  &:out-of-range {
    background-color: rgb(214, 122, 93);
  }
`;

export const Label = styled.span`
  display: inline-block;
  width: 100%;
  max-width: 350px;
  padding: 10px 0px;
  margin-right: 5px;
  text-align: center;
`;

export const Select = styled.select`
  background: rgb(237, 247, 192);
  border-radius: 5px;
  border: 2px solid rgb(83, 105, 82);
  width: 320px;
  text-align: center;
  padding: 10px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  border: 2px solid rgb(83, 105, 82);
  background-color: rgba(128, 255, 0, 0.4);
  color: rgba(32, 33, 32, 1);
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: rgba(128, 255, 0, 0.85);
    color: rgba(0, 0, 0, 1);
  }

  &:active {
    background-color: rgba(128, 255, 0, 0.99);
    color: rgb(2, 24, 6);
    border: 2px solid rgb(2, 24, 6);
  }
`;
