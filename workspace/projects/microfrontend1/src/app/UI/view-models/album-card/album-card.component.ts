import { Component } from '@angular/core';
import { GetAlbumUseCases } from '../../../domain/usecase/get-album-use-case';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {
  constructor(private _getAlbumUseCase : GetAlbumUseCases) { }
  response$:any ;
  datos: any;
  ngOnInit(): void {
    this.response$ = this._getAlbumUseCase.getAlbumById('12');
    this.response$.subscribe (
      (data:any) => {
        this.datos = data;
      }
    );
    
  }
}
