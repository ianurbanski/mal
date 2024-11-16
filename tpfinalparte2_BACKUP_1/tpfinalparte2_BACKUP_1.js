let objJuego;

function setup() {
  createCanvas(640, 480);
  objJuego = new juego();
}

function draw() {
  background(200);
  objJuego.dibujar();
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}
