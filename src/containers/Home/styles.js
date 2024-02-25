import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  margin-top: 20px;
  width: 342px;
  height: 354px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 40px;
  margin-top: 25px;
  margin-left: 55px;
`;

export const InputLabel = styled.p`
  color: white;
  font-weight: 700;
  font-size: 18px;
  line-break: 22px;
  color: #eeeeee;
  margin-left: 20px;
  border: none;
`;

export const Input = styled.input`
  font-weight: 300;
  font-size: 18px;
  outline: none;
  padding-left: 25px;
  line-height: 21px;
  border: none;
  border-radius: 14px;
  width: 342px;
  height: 58px;
  margin-bottom: 42px;
  color: white;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Button = styled(Link)`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 342px;
  height: 68px;
  font-weight: 700;
  font-size: 17px;
  line-height: 2.5px;
  cursor: pointer;
  border: none;
  margin-bottom: 20px;
  transition: 0.7;
  &:hover {
    opacity: 0.5;
  }
`;

export const User = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  outline: none;
  font-weight: 300;
  font-size: 18px;
  padding-left: 30px;
  line-height: 21px;
  border: none;
  border-radius: 14px;
  width: 342px;
  height: 101px;

  margin-bottom: 42px;
  color: white;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  p {
    background: none;
    font-style: normal;
    font-size: 18px;
    line-height: 28px;
    color: #ffff;
    margin-top: 5px;
  }

  button {
    border: none;
    background: none;
    margin-left: 250px;
    border: none;
    cursor: pointer;
  }
`;
