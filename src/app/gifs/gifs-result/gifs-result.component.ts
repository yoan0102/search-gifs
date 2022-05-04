import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-result',
  templateUrl: './gifs-result.component.html',
  styles: [],
})
export class GifsResultComponent  {

  get resultados() {
    return this.gifsService.resultados
  }
  constructor(private gifsService: GifsService) {}

}
