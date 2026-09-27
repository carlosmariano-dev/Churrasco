//churrasco perfeito

const lista: {
  item: 'Carne'| 'Farofa'| 'Carvao'| 'Refrigerante',
  quant: number,
  tipo: 'g' | 'Kg' | 'garrafa(s) de 2L'
}[] = [];

function run() {
  const pessoas = prompt('Digite a quantidade de pessoas que você convidou:');

  if (pessoas === '') {
    alert('Por favor, informe uma quantidade.');
    run();
  }else if (pessoas === null){
    alert('Programa encerrado.');
    return;
  }

  const numpes = Number(pessoas);

  if (!(numpes > 0)) {
    alert ('Digite uma quantidade positiva.')
    run();
  }

  lista[lista.length] = {
    item: 'Carne',
    quant: numpes * 400,
    tipo: 'g'
  }
  lista[lista.length] = {
    item: 'Farofa',
    quant: numpes * 100,
    tipo: 'g'
  }

  lista[lista.length] = {
    item: 'Carvao',
    quant: Math.ceil(numpes / 5),
    tipo: 'Kg'
  }

  lista[lista.length] = {
    item: 'Refrigerante',
    quant: Math.ceil(numpes / 4),
    tipo: 'garrafa(s) de 2L'
  }

  let message = 'Lista de compras - Churrasco para ' + numpes + ' pessoas:\n\n';

  for (let i = 0; i < lista.length; i++) {
    message += i+1 + '. ' + lista[i].item + ': ' + lista[i].quant + ' ' + lista[i].tipo + '\n';
  }

  alert(message);
 
}

run ();