
let tabelaJogos = document.querySelector('.tabelaJogos')

fetch('json/jogosFase01.json')
.then(response => response.json())
.then( data => data.forEach( jogo => {

  // criar uma linha de tabela, colocar ela na tabela 
  let linha = document.createElement('tr')
  tabelaJogos.appendChild(linha)
  //Preencher os dados do jogo em cada linha 
  linha.innerHTML = `
    <td>${jogo.diaSemana}</td>
    <td>${jogo.data}</td>
    <td>${jogo.hora}</td>
    <td>${jogo.grupo}</td>
    <td class="centralizar">

    <img class="imgP" src="./img/bandeiras/${jogo.mandante}">
    <span class="gols" >${jogo.gols_mandante}</span>

    <span class="partida">${jogo.partida}</span>

    <span class="gols" >${jogo.gols_visitante}</span>
    <img class="imgP" src="./img/bandeiras/${jogo.visitante}">

    </td>
    <td>${jogo.estadio}</td>
  `
})
)

let tabelaClassificacao = document.querySelector('.tabelaClassificacao')
let linhas = document.querySelectorAll('.corpoClassificacao tr')

exibirTabelaClassificacao('A') 
function exibirTabelaClassificacao(letraGrupo){

  document.querySelector('.letra').innerHTML = letraGrupo  

  fetch(`json/classificacaoGrupo${letraGrupo}.json`)
  .then(response => response.json())
  .then(data => {
    // ORDENAR PELA POSIÇÃO
    data.sort((a, b) => a.posicao - b.posicao)  
    data.forEach( (selecao, indice ) => {

    // Criar linha tr 
    // this.linha = document.createElement('tr')

    // colocar como filho dentro da tabela 
    //tabelaClassificacao.appendChild(linha)

    // preencher dados
    linhas[indice].innerHTML = `
    <td>${selecao.posicao}</td>
    <td>${selecao.selecao}</td>
    <td>${selecao.pontos}</td>
    <td>${selecao.jogos}</td>
    <td>${selecao.vitorias}</td>
    <td>${selecao.empates}</td>
    <td>${selecao.derrotas}</td>
    <td>${selecao.gols_pro}</td>
    <td>${selecao.gols_contra}</td>
    <td>${selecao.saldo_de_gols}</td>
    `
  })
  })
}
//exibirTabelaClassificacao('G')

// exibir tabela de classificação dinamica 
 let selectLetra = document.querySelector('.letrasDosGrupos')
//  console.log(selectLetra)

 // usar um escutador de eventos para nossa caixa // no caso o evento de modificação
 selectLetra.addEventListener('change', () => {
  // pegar o valor da option atual
  const letraAtual = event.target.value
  // tabelaClassificacao.innerHTML = ' '
  exibirTabelaClassificacao(letraAtual)
 } )


 // OITAVAS DE FINAL
const oitavas = document.querySelector('.divOitavas')

 fetch('../json/oitavas-de-final.json')
 .then(response => response.json())
 .then(data => {

    data.forEach( jogo => {
      let divisoria = document.createElement('div')

     oitavas.appendChild(divisoria) 

     divisoria.innerHTML = `
     <h3 class="jogo" > Oitavas ${jogo.id} </h3> 
     <h4>
      <span class="dia"> ${jogo.diaSemana}</span>
      ${jogo.data}
      <span class="hora"> ${jogo.hora}</span>
    </h4>
    <h4 class="centralizar jogo">
    <img class="imgP" src="./img/bandeiras/${jogo.img_mandante}" />
      <span class="gols"> ${jogo.gols_mandante} </span>
      ${jogo.partida}
      <span class="gols"> ${jogo.gols_visitante} </span>
      <img class=" imgP" src="./img/bandeiras/${jogo.img_visitante}" />
    </h4>        
    <h5> ${jogo.estadio} </h5>

     `
    })
 })