import React, { useEffect, useState } from 'react';
import { API_URL } from '../../.env.json';
import axios from 'axios';


import { Container, Card, CardContainer, Text } from './styles';

export default function MarmitasPassadas() {
  const [marmitasAnteriores, setMarmitasAnteriores] = useState('');
  useEffect(() => {
    carregarMarmitas();
  }, [])

  async function carregarMarmitas() {
    const response = await axios.get(`${API_URL}/showMeats`);
    setMarmitasAnteriores(response.data);
  }

  return (
    <Container>
      <CardContainer>
        {marmitasAnteriores && marmitasAnteriores.map(m => <Card key={m.id}><Text>{m.meat}{m.drink}</Text></Card>)}
      </CardContainer>
    </Container>
  );
}
