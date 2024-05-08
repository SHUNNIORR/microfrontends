import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumCardComponent } from './album-card.component'; 

const routes: Routes = [{ path: '', component: AlbumCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumCardRoutingModule { }
