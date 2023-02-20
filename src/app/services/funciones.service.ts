import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  constructor() { }

  irARedSocial(red:string):void{
    switch (red) {
      case 'github':
        
        break;
    
      default:
        break;
    }
  }
}
