class enemigo{
  constructor(posX, posY){
  this.posX = posX;
  this.posY = posY;
  this.miColor = color(0,255,0);   
  this.bala = new bala();
  }
  
  dibujar(){
    fill(this.miColor);
    ellipse(this.posX, this.posY, 30, 30)
  }
  
  dispararBala(){
    
  }
  
  
}
