import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
 /*  destinos: number[] = [];
  valor: number;
 */
/* transferencias: any[] = []; */


constructor(private service: TransferenciaService){

}

  transferir($event){
    /* alert('cheguei aqui no event' + $event.destino); */
    console.log($event);
    /* this.destinos.push($event.destino);
    this.valor = $event.valor; */
    /* alert(this.destino + "olha"); */
 /*    const transferencia = {...$event, data: new Date()}
    this.transferencias.push(transferencia); */

    this.service.adicionar($event)

  }




}
