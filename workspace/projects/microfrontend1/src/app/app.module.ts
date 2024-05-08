import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumCardComponent } from './UI/view-models/album-card/album-card.component';
import { AlbumGateway } from './domain/models/Album/gateway/album-gateway';
import { AlbumApiService } from './infraestructure/driven-adapter/album-api/album-api.service';
import { AlbumCardModule } from './UI/view-models/album-card/album-card.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlbumCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
