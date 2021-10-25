import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  //declaring our first route with an object , property path
  { 
    path: '', // refers to localhost:4200/
    
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
