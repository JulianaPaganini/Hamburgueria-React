import React, { useState, useEffect } from "react";

import axios from "axios";

import Pedido from "../../assets/logopedido.png";

import Lixeira from "../../assets/lixeira.svg";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  Button,
  User,
} from "./styles";

function Users() {
  //criação de estado dentro do React, crio uma constante, nesse caso o nome da minha constante é user e coloco o sete mais o nome da minha constante setUsers, desse modo se cria o estado.
  const [users, setUsers] = useState([]);
 
useEffect(()  => {

  async function fetchUsers(){

      const { data: newUsers } = await axios.get("http://localhost:3001/users");

        setUsers(newUsers);
}
  fetchUsers();
}, []);



 async function deleteUser(userId) {

    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo" src={Pedido} />
      <ContainerItens>
        <H1>Pedidos</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.pedido}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Lixeira} alt="lata-de-lixo" />
              </button>
              <p>{user.name}</p>
            </User>
          ))}
          
        </ul>

        <Button to="/" >
          Voltar
        </Button>

    
      </ContainerItens>
    </Container>
  );
}

export default Users;
