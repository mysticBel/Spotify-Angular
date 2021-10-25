import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [        // declares : components, directives, pipes 
    AppComponent,
  ],
  imports: [             // Only imports other modules
    BrowserModule,
    AppRoutingModule
  ],

  exports: [],           // You can export what you declare :)  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
