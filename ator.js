let xAtor = 100;
let yAtor = 380;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
   image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
       yAtor +=3;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro,alturaCarro, xAtor, yAtor,10)  
    if(colisao){
      voltaAtorParaPosiçaoInicial();
      if(pontosMaiorQueZero()){
      meusPontos -=1;
      }
    }
  }
}

function voltaAtorParaPosiçaoInicial(){
  yAtor = 380;
}

function exibiPontos(){
  textSize(25);
  fill(color(255, 20, 147));
  text(meusPontos, width / 3.5, 27);
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosiçaoInicial();
  }
}

function pontosMaiorQueZero(){
  return  meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 380;
}



