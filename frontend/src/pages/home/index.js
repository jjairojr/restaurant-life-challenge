import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Card, Button, Label, Content, Img, Text } from './styles';

export default function Home() {
  return (
    <>
      <Container>
        <Card>
          <Content>
            <Img></Img>
            <Text>Olá, seja bem-vindo ao restaurante do Sr.Pedro, você está a fim da melhor marmita da região? Está no lugar certo!! Aproveite o sabor do cerrado!</Text>
          </Content>

          <Link to="/restaurante"><Button><Label>Peça sua Marmita!</Label></Button></Link>
        </Card>
      </Container>
    </>
  );
}
