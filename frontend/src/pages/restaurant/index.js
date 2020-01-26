/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import SucoAbacaxi from '../../assets/img/bebidas/abacaxi.png';
import CocaCola from '../../assets/img/bebidas/coca.png';
import SucoLaranja from '../../assets/img/bebidas/laranja.png';
import Sprite from '../../assets/img/bebidas/sprite.png';
import SucoUva from '../../assets/img/bebidas/sucoUva.png';
import api from '../../services/api'
import menu from '../../assets/cardapio.json';
import numeroExecucoes from '../../utils/numeroExecucoes';
import gerarNumeroAleatorio from '../../utils/gerarNumeroAleatorio';

import {
  AllContainer,
  Container,
  Card,
  Form,
  Circle,
  ButtonContainer,
  CircleMenor,
  Label,
  Text,
  Sliders,
  FoodContainer,
  TitleContainer
} from './styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Restaurant() {
  const classes = useStyles();
  const cardapioVariavel = menu.cardapioVariavel;
  const [cardapio, setCardapio] = useState([...menu.cardapioFixo.opcoes])
  const [diaDaSemana, setDiaDaSemana] = useState(cardapioVariavel.segunda);
  const [imgBebida, setImgBebida] = useState(SucoLaranja);
  const [bebida, setBebida] = useState(cardapioVariavel.segunda.bebida);
  const [marmita, setMarmita] = useState('');
  const [carbo, setCarbo] = useState(1);
  const [proteina, setProteina] = useState(1);
  const [vegetais, setVegetais] = useState(1);

  useEffect(() => {
    unirCardapio(diaDaSemana.pratos, cardapio);
    setBebida(diaDaSemana.bebida)
    obterImagemBebida(diaDaSemana.bebida);
  }, [diaDaSemana]);

  function unirCardapio(weekDay, cardapio) {
    setCardapio([...menu.cardapioFixo.opcoes]);
    weekDay.forEach(c => cardapio.push(c));
    const novoCardapio = cardapio;
    setCardapio(novoCardapio);
  }

  function mudarDiaDaSemana(e) {
    setDiaDaSemana(e.target.value);
  }

  function gerarMarmita() {
    const meatCarbo = numeroExecucoes(carbo, gerarCarbos);
    const meatProtein = numeroExecucoes(proteina, gerarProteinas);
    const meatVegie = numeroExecucoes(vegetais, gerarVegetais);
    setMarmita(meatCarbo.concat(` ${meatProtein} `, `${meatVegie}`));
    if (marmita) {
      salvarMarmita();
    }
  }

  async function salvarMarmita() {
    await api.post('/saveMeats', {
      meat: marmita,
      drink: bebida
    })
  }

  function gerarCarbos() {
    const carboCardapio = cardapio.filter(c => c.classificacao === 'CARBO');
    const indexCarbo = gerarNumeroAleatorio(carboCardapio.length, 0);
    return carboCardapio[indexCarbo].descricao;
  }

  function gerarProteinas() {
    const proteinCardapio = cardapio.filter(c => c.classificacao === 'PROTEIN');
    const indexProtein = gerarNumeroAleatorio(proteinCardapio.length, 0);
    return proteinCardapio[indexProtein].descricao;
  }

  function gerarVegetais() {
    const veggieCardapio = cardapio.filter(c => c.classificacao === 'VEGIE');
    const indexVeggie = gerarNumeroAleatorio(veggieCardapio.length, 0);
    return veggieCardapio[indexVeggie].descricao;
  }

  function getCarbo(value) {
    setCarbo(value);
  }

  function getProteinas(value) {
    setProteina(value);
  }

  function getVegetais(value) {
    setVegetais(value);
  }

  function obterImagemBebida(value) {
    switch (value) {
      case 'Coca em Lata':
        setImgBebida(CocaCola);
        break;

      case 'Suco de laranja':
        setImgBebida(SucoLaranja);
        break;

      case 'Sprite Lata':
        setImgBebida(Sprite);
        break;

      case 'Suco de Abacaxi':
        setImgBebida(SucoAbacaxi);
        break;

      case 'Suco de Uva':
        setImgBebida(SucoUva);
        break;

      default:
        break;
    }
  }

  return (
    <AllContainer>
      <Container>
        <Card>
          <Form>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Dia da semana</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={diaDaSemana}
                onChange={mudarDiaDaSemana}>
                <MenuItem value={cardapioVariavel.segunda}>Segunda</MenuItem>
                <MenuItem value={cardapioVariavel.terca}>Terca</MenuItem>
                <MenuItem value={cardapioVariavel.quarta}>Quarta</MenuItem>
                <MenuItem value={cardapioVariavel.quinta}>Quinta</MenuItem>
                <MenuItem value={cardapioVariavel.sexta}>Sexta</MenuItem>
              </Select>
            </FormControl>
            <Sliders>
              <Typography id="discrete-slider" gutterBottom>
                Carboidratos
            </Typography>
              <Slider
                color="secondary"
                defaultValue={1}
                getAriaValueText={getCarbo}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={3} />
              <Typography id="discrete-slider" gutterBottom>
                Proteínas
              </Typography>
              <Slider
                color="secondary"
                defaultValue={1}
                getAriaValueText={getProteinas}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={3} />
              <Typography id="discrete-slider" gutterBottom>
                Vegetais
            </Typography>
              <Slider
                color="secondary"
                defaultValue={1}
                getAriaValueText={getVegetais}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={3} />
            </Sliders>
          </Form>
          <ButtonContainer style={{ display: "flex" }}>
            <Button variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<FastfoodIcon />}
              disabled={carbo + proteina + vegetais > 7} onClick={gerarMarmita}><Label>Gerar marmita</Label></Button>
            <Link style={{ textDecoration: "none" }} to="/marmitasanteriores"><Button variant="contained" color="primary" style={{ fontSize: "13px" }}><Label>Ver Marmitas Anteriores</Label></Button></Link>
          </ButtonContainer>
        </Card>

        <FoodContainer>
          <Circle marmitaImg={marmita}>
            <TitleContainer>
              <Text>
                {marmita ? `Os ingredientes da sua marmita são:${marmita}` : 'Gere sua marmita!'}</Text>
            </TitleContainer>
          </Circle>
          <CircleMenor imagebg={imgBebida}><TitleContainer><Text>A Bebida de hoje é {bebida}</Text></TitleContainer></CircleMenor>
        </FoodContainer>
        <Snackbar open={marmita ? true : false}>
          <Alert severity="success">
            Sua Marmita foi salva com sucesso!
        </Alert>
        </Snackbar>
      </Container>
    </AllContainer>
  );
}
