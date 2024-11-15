class juego{
  constructor(cantidadEnemigos){
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearPersonaje();
    this.crearEnemigos();
 }
  
  dibujar(){    
    this.personaje.dibujar();
    
    for(let i=0; i < this.cantidadEnemigos; i++){
      this.enemigos[i].dibujar();
   }
   
   this.controlarDisparosAEnemigos();
  }
  
  
  iniciar(){
    
  }
  
  crearEnemigos(){
   this.enemigos = [];
   for(let i=0; i < this.cantidadEnemigos ; i++){
      this.enemigos[i] = new enemigo(i*45, 100);
   }
  }
  
  
  crearPersonaje(){
   this.personaje = new personaje(width/2, 300); 
    
  }
  
  personajeGano(){
    
  }
  
  teclaPresionada(keyCode){
    this.personaje.teclaPresionada(keyCode);
  }
  
  controlarDisparosAEnemigos(){
   if(this.personaje.haDisparadoBala()){
     for(let i=0; i < this.cantidadEnemigos ; i++){
        this.enemigos[i].haTocadoLaBala(this.personaje.bala);
          
          
       }
   }
     
  }
}
