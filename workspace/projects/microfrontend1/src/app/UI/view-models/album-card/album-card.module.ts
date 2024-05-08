import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCardRoutingModule } from './album-card-routing.module';
import { AlbumGateway } from '../../../domain/models/Album/gateway/album-gateway';
import { AlbumApiService } from '../../../infraestructure/driven-adapter/album-api/album-api.service';
import { GetAlbumUseCases } from '../../../domain/usecase/get-album-use-case';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../../app-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlbumCardRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    {provide: AlbumGateway, useClass: AlbumApiService},
    GetAlbumUseCases
  ],
})
export class AlbumCardModule { }
