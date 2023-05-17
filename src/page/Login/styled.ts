import styled from 'styled-components';
import * as colors from '../../config/color';

export const Image = styled.img`
  width: 110px;
  margin: auto;
  margin-bottom: 10px;
  justify-content: center;
  display: flex;
`;

export const Container = styled.div`
  max-width: 350px;
  width: 350px;
  background: #fff;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    text-align: center;
    flex-direction: column;
    margin-bottom: 20px;
    font-weight: 550;
    color: #000;
  }

  input {
    height: 40px;
    font-size: 15px;
    text-align: center;
    border: 1px solid ${colors.primaryBodyColor};
    padding: 0 10px;
    border-radius: 25px;
    margin-top: 5px;

    &:hover {
      border: 3px solid #c90a02;
      transition: 1s;
    }
  }

  button {
    cursor: pointer;
    background: #0ab42c;
    border: none;
    color: #fff;
    padding: 10px 15px;
    border-radius: 20px;
    font-weight: 700;

    &:hover {
      background-color: #016916;
      transition: 1s;
    }
  }
`;
