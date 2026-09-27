//churrasco perfeito

function run() {
  const pessoas = prompt('Digite a quantidade de pessoas que você convidou:');

  if (pessoas === '') {
    alert('Por favor, informe uma quantidade.');
    return run();
  }else if (pessoas === null){
    alert('Programa encerrado.');
    return;
  }

  const numpes = Number(pessoas);

  if (!(numpes > 0)) {
    alert ('Digite uma quantidade positiva.')
    return run();
  }

  const carneg =  numpes * 400;
  const carnekg = carneg / 1000;
  const farog = numpes * 100; 
  const farokg = farog / 1000;
  const carvao = Math.ceil(numpes / 5);
  const refri =  Math.ceil(numpes / 4);

  const message = 'Lista de compras - Churrasco para ' + numpes + ' pessoas:\n\n' +
  'Carne: ' + carnekg + 'Kg (' + carneg + 'g)\n' + 'Farofa: ' + farokg + 'Kg (' + farog + 'g)\n' +
  'Carvão: ' + carvao + 'Kg\n' + 'Refrigerante: ' + refri + ' garrafa(s) de 2L';

 alert(message);
 
}

run ();  