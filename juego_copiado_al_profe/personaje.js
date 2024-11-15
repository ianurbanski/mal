class personaje{
 constructor(posX, posY){
  this.posX = posX;
  this.posY = posY;
  this.miColor = color(255,0,0);
  this.vida = 1;
  this.bala = new bala();
 }
 
 dibujar(){
   this.bala.dibujar();
   
   fill(this.miColor);
   rect(this.posX, this.posY, 50, 50); 
 }
 
 teclaPresionada(keyCode){
   if(keyCode == LEFT_ARROW){
    this.moverIzq();
   }else if(keyCode == RIGHT_ARROW){
     this.moverDer();
   }else if(keyCode == ENTER){
     this.dispararBala();
  }
 }
 
 moverDer(){
 this.posX += 10;
 }
 
 moverIzq(){
   this.posX -= 10;
 }
 
 estaVivo(){
   
 }
 
 dispararBala(){
   
   this.bala = new bala(this.posX, this.posY);
   this.bala.disparar();
 }
 
 haDisparadoBala(){
  return this.bala.disparada;
 }
}
