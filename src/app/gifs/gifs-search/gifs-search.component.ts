import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './gifs-search.component.html',
  styles: [],
})
export class GifsSearchComponent {

  @ViewChild('txtbuscar') txtbuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  buscar(): void {
    
    const valor = this.txtbuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return ;
    }
    
    this.gifsService.buscarGifs(valor)
    this.txtbuscar.nativeElement.value = ''

  }

}
