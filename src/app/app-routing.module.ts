import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { InnerhomeComponent } from './innerhome/innerhome.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'innerhome', component: InnerhomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
