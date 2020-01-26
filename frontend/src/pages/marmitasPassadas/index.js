import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, Card, CardContainer, Text } from './styles';

export default function MarmitasPassadas() {
  const [marmitasAnteriores, setMarmitasAnteriores] = useState('');
  useEffect(() => {
    carregarMarmitas();
  }, [])

  async function carregarMarmitas() {
    const response = await api.get('/showMeats');
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
