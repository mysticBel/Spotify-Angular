import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from 'src/app/example/example.component';

const routes: Routes = [    //here we establish routes with components , Greeeaat!!!  🤩
   { 
     path: '',
     component: ExampleComponent,
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
