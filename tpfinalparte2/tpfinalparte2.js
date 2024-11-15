let objJuego;


function setup() {
  createCanvas(640, 480);
  objJuego = new juego(5);
}


function draw() {
  background(200);
  objJuego.dibujar();
}
