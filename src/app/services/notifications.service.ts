import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
/*Creamos un subject para poder informar a todos componentes de las variaciones del valor
  Utilizamos un BehaviorSubject para que el valor inicial sea 0.
  Es posible usar un Subject teniendo en cuenta que habrá que gestionar la ausencia de valor inicial
  Además hacemos el subject privado para que no pueda ser modificado desde fuera del servicio*/

  private counter:BehaviorSubject<number> = new BehaviorSubject(0);

  /*Creamos un observable a partir del BehaviorSubject.
  Desde este observable podremos "subscribirnos" a los cambios del valor del subject
  en cada componente*/

  counter$ = this.counter.asObservable();


  constructor() { }

  addNotification() {
    //Sumamos 1 al contador directamente en el valor del subject
    this.counter.next(this.counter.value + 1);
  }

  removeNotification() {
    //Restamos 1 al contador directamente en el valor del subject
    //previa comprobación de que el valor no era 0
    if (this.counter.value === 0) {
      return;
    }
    this.counter.next(this.counter.value - 1);
  }

  resetCount() {
    //Reseteamos el contador a 0 directamente en el valor del subject
    this.counter.next(0);
  }
}
