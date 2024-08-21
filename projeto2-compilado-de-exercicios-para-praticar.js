/* 1-Faça um Programa que mostre a mensagem "Olá mundo" na tela.*/
console.log('Olá mundo');

/*2-Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".*/
numero = prompt("Digite um número:");

alert("O número informado foi " + numero);

/*3-Faça um Programa que peça dois números e imprima a soma.*/
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let soma = numero1 + numero2;
console.log("A soma dos números é: " + soma);

/*4-Faça um Programa que peça as 4 notas bimestrais e mostre a média.*/
let nota1 = parseFloat(prompt("Digite a primeira nota bimestral:"));
let nota2 = parseFloat(prompt("Digite a segunda nota bimestral:"));
let nota3 = parseFloat(prompt("Digite a terceira nota bimestral:"));
let nota4 = parseFloat(prompt("Digite a quarta nota bimestral:"));
let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("A média das notas é: " + media);

/*5-Faça um Programa que converta metros para centímetros.*/
let metros = parseFloat(prompt("Digite o valor em metros:"));
let centimetros = metros * 100;
console.log(metros + " metros é igual a " + centimetros + " centímetros.");

/*6-Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.*/
let raio = parseFloat(prompt("Digite o raio do círculo:"));
let area = Math.PI * Math.pow(raio, 2);
console.log(`A área do círculo com raio ${raio} é ${area.toFixed(2)}.`);

/*7-Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.*/
let lado = parseFloat(prompt("Digite o comprimento do lado do quadrado:"));
let area = Math.pow(lado, 2);
let dobroArea = 2 * area;
console.log(`A área do quadrado é ${area.toFixed(2)}.`);
console.log(`O dobro da área é ${dobroArea.toFixed(2)}.`);

/*8-Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.*/
let valorPorHora = parseFloat(prompt("Digite quanto você ganha por hora:"));
let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
let salarioTotal = valorPorHora * horasTrabalhadas;
console.log(`O total do seu salário no mês é R$${salarioTotal.toFixed(2)}.`);

/*9-Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).*/
let fahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit:"));
let celsius = 5 * ((fahrenheit - 32) / 9);
console.log(`A temperatura de ${fahrenheit} graus Fahrenheit é igual a ${celsius.toFixed(2)} graus Celsius.`);

/*10-Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.*/
let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
let fahrenheit = (9 / 5) * celsius + 32;
console.log(`A temperatura de ${celsius} graus Celsius é igual a ${fahrenheit.toFixed(2)} graus Fahrenheit.`);

/*11-Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
o produto do dobro do primeiro com metade do segundo .
a soma do triplo do primeiro com o terceiro.
o terceiro elevado ao cubo.*/
let numeroInteiro1 = parseInt(prompt("Digite o primeiro número inteiro:"), 10);
let numeroInteiro2 = parseInt(prompt("Digite o segundo número inteiro:"), 10);
let numeroReal = parseFloat(prompt("Digite um número real:"));
let produto = (2 * numeroInteiro1) * (numeroInteiro2 / 2);
let soma = (3 * numeroInteiro1) + numeroReal;
let cubo = Math.pow(numeroReal, 3);
console.log(`O produto do dobro do primeiro número com metade do segundo é: ${produto.toFixed(2)}`);
console.log(`A soma do triplo do primeiro número com o terceiro é: ${soma.toFixed(2)}`);
console.log(`O terceiro número elevado ao cubo é: ${cubo.toFixed(2)}`);

/*12-Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58*/
let altura = parseFloat(prompt("Digite a altura da pessoa em metros:"));
let pesoIdeal = (72.7 * altura) - 58;
console.log(`O peso ideal para uma altura de ${altura.toFixed(2)} metros é ${pesoIdeal.toFixed(2)} kg.`);

/*13-Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:

Para homens: (72.7*h) - 58
Para mulheres: (62.1*h) - 44.7*/

let altura = parseFloat(prompt("Digite a altura da pessoa em metros:"));
let genero = prompt("Digite o gênero (homem/mulher):").trim().toLowerCase();
let pesoIdeal;
if (genero === 'homem') {
    pesoIdeal = (72.7 * altura) - 58;
} else if (genero === 'mulher') {
    pesoIdeal = (62.1 * altura) - 44.7;
} else {
    pesoIdeal = NaN;
    console.log("Gênero inválido. Por favor, digite 'homem' ou 'mulher'.");
}
if (!isNaN(pesoIdeal)) {
    console.log(`O peso ideal para uma altura de ${altura.toFixed(2)} metros e gênero ${genero} é ${pesoIdeal.toFixed(2)} kg.`);
}

/*14-João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
*/
let peso = parseFloat(prompt("Digite o peso dos peixes em quilos:"));
const limite = 50;
const taxaMulta = 4.00;
if (peso > limite) {
    let excesso = peso - limite;
    let multa = excesso * taxaMulta;
    console.log(`Excesso de ${excesso.toFixed(2)} quilos.`);
    console.log(`Multa a pagar: R$${multa.toFixed(2)}`);
} else {
    console.log("Não há excesso de peso. Nenhuma multa será aplicada.");
}

/*15-Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:

salário bruto.
quanto pagou ao INSS.
quando pagou para o sindicato.
o salário líquido. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
Salário Bruto : R$
INSS (8%) : R$
Sindicato ( 5%) : R$ = Salário Liquido : R$ Obs.: Salário Bruto - Descontos = Salário Líquido.*/
let ganhoPorHora = parseFloat(prompt("Digite quanto você ganha por hora: R$"));
let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
let salarioBruto = ganhoPorHora * horasTrabalhadas;
let descontoInss = salarioBruto * 0.08;
let descontoSindicato = salarioBruto * 0.05;
let salarioLiquido = salarioBruto - descontoInss - descontoSindicato;
console.log(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}`);
console.log(`INSS (8%): R$ ${descontoInss.toFixed(2)}`);
console.log(`Sindicato (5%): R$ ${descontoSindicato.toFixed(2)}`);
console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);