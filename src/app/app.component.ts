import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  destino: number;
  valor: number;



  transferir($event){
    alert('cheguei aqui no event' + $event.destino);
    console.log($event)
    this.destino = $event.destino;
    this.valor = $event.valor;
    alert(this.destino + "olha");
  }




}
