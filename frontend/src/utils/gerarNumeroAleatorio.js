export default function gerarNumeroAleatorio(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}