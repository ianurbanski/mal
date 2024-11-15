class juego{
   constructor(){
   this.crearEnemigos();  
     
     
   } 
   
   
   dibujar(){
     for(let i=0; i < 5; i++){
      this.enemigos[i].dibujar(); 
     }
   }
   
   crearEnemigos(){     
     this.enemigos = [];
       for(let i=0; i < 5 ; i++){
        this.enemigos[i] = new enemigo(i*150, 100); 
       }
   }
   
   crearPersonaje(){
     
   }
   
}
