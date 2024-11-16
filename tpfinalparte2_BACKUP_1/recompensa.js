class recompensa {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255, 255, 0);
    this.agarroRecompensa = false;
  }

  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, 15, 15);
  }

  colisionConRecompensa(personaje) {
    if (dist(this.posX, this.posY, personaje.posX, personaje.posY) < 25) {
      this.agarroRecompensa = true;
    }
  }
}
