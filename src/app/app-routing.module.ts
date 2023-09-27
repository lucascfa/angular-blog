import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'conteudo/:id',
    component: ConteudoComponent
  },
  {
    path:'',
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
