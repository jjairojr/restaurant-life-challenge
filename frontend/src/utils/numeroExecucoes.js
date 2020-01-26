export default function numeroExecucoes(number, func) {
  let result = [];
  for (let index = 0; index <= number - 1; index++) {
    const element = func();
    result += element + ', ';
  }
  return result;

}