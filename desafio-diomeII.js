// Variáveis
let nome = "Dani Liano"
let tabelaPontos = pontos(100, 35)
let nivel=""

//Função para calcular os pontos
function pontos(vitorias, derrotas){
    pontos = vitorias - derrotas
    return pontos
}

//Função para determinar o nível 
if(tabelaPontos <= 10){
  nivel = "ferro"
}

else if(tabelaPontos <= 20){
  nivel = "Bronze"
}

else if(tabelaPontos <= 50){
  nivel = "Prata"
}

else if(tabelaPontos <= 80){
  nivel = "Ouro"
}

else if(tabelaPontos <= 90){
  nivel = "Diamante"
}

else if(tabelaPontos <= 100){
  nivel = "Lendário"
}

else{
  nivel = "Imortal"
}

//Exibir o resultado
console.log(`A Heroína ${nome} tem o saldo de ${tabelaPontos} pontos e está no nível ${nivel}.`)