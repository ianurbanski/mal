class enemigo {
  constructor(posX, posY, tiempoDisparo) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0, 255, 0);
    this.balas = [];
    this.tiempoDisparo = tiempoDisparo;
    this.ultimoDisparo = millis();
  }

  dibujar() {
    for (let bala of this.balas) {
      bala.dibujar();
    }

    fill(this.miColor);
    ellipse(this.posX, this.posY, 40, 40);

    this.verificarDisparo();
  }

  dispararBala() {
    let nuevaBala = new bala(this.posX, this.posY);
    nuevaBala.disparar();
    this.balas.push(nuevaBala);
  }

  verificarDisparo() {
    if (millis() - this.ultimoDisparo >= this.tiempoDisparo) {
      this.dispararBala();
      this.ultimoDisparo = millis();
    }
  }

  teclaPresionada() {}
}
