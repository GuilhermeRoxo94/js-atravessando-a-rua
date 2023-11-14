function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  passouTodaATela();
  verificaColisao();
  exibiPontos();
  marcaPontos();
  pontosMaiorQueZero();
  
}
