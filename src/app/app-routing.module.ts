import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', // refers to localhost:4200/
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule) //dynamic import
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
