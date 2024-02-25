import React, { useState, useRef } from "react";

import axios from "axios";

import Logo from "../../assets/logo.png";

import {
  
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  //criação de estado dentro do React, crio uma constante, nesse caso o nome da minha constante é user e coloco o sete mais o nome da minha constante setUsers, desse modo se cria o estado.
  const [users, setUsers] = useState([]);
  const inputPedido = useRef();
  const inputName = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      pedido: inputPedido.current.value,
      name: inputName.current.value,
    });
    setUsers([...users, newUser]);
  }

  return (
    <Container>
      <Image alt="logo" src={Logo} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedidos</InputLabel>
        <Input ref={inputPedido} placeholder="Escreva o seu pedido" />

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <Button to="/pedidos" onClick={addNewUser}>
          Novo Pedido
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
