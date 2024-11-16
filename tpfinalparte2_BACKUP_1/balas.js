class bala {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.disparada = false;
  }

  dibujar() {
    if (this.disparada) {
      fill(0);
      ellipse(this.posX, this.posY, 50, 50);
      this.mover();
    }
  }

  mover() {
    if (this.velocidadRapida) {
      this.posX -= 40; // Balas se mueven más rápido si la bandera es verdadera
    } else {
      this.posX -= 10; // Velocidad normal de las balas
    }
  }

  disparar() {
    this.disparada = true;
  }

  setVelocidadRapida(estado) {
    this.velocidadRapida = estado;
  }
}
