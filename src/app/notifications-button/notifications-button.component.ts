import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.scss'],
  /*Simplificamos el cambio de deteccion de cambios,
  ya que solo queremos que angular compruebe si hay cambios
  en el valor del async pipe*/
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsButtonComponent implements OnInit {
  /*Creamos un observable en el componente, es a él a quien informa el BehaviorSubject del servicio
  * de notificaciones de cada cambio de valor*/
  bellNumber: Observable<number>

  constructor(
    //inyectamos el servicio de notificaciones
    private notService: NotificationsService
  ) { }

  ngOnInit(): void {
  /*En cuanto se inicializa el componente igualamos el observable propio
    * al observable del servicio.
    * Como en el servicio tenemos un BehaviorSubject, ya en este momento
    * el observable del componente recibe el valor inicial de 0*/
    this.bellNumber=this.notService.counter$
  }

}
