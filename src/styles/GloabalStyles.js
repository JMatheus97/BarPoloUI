import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/color';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: sans-serif ;
  }

  body{
    font-family: sans-serif;
    background: ${colors.primaryBodyColor};
    color: ${colors.primaryBodyColor};
  }

  html, body, #root {
    height: 100%;

    #label-logout{
      cursor: pointer;
    }
  }

  button {
    cursor: pointer;
    background: ${colors.primaryButtonColor};
    border: none;
    color: #fff;
    padding: 10px 15px;
    border-radius: 4px;
    font-weight: 700;
  }


  ul{
    list-style: none;
  }

`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ContainerTable = styled.div`
  width: 95%;
  background: #fff;
  margin: 10px auto;
  padding: 20px;
  border-radius: 4px;
  height: 340px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-height: 360px;
  overflow: auto;

  tr {
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  td {
    .icon-delete {
      color: #ff0022;
      cursor: pointer;
    }

    .icon-edit {
      color: #00487c;
      cursor: pointer;
    }
  }

  td {
    .icon-renew {
      color: ${colors.primaryButtonColor};
      cursor: pointer;
    }
  }
`;

export const ContainerRegister = styled.div`
  width: 95%;
  background: #fff;
  margin: 10px auto;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
