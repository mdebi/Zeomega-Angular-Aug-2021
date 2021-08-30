import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({

  /* All UI entities are registered (Component, Directive, Pipe) */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent
  ],
  /* All the dependent modules are registered here */
  imports: [
    BrowserModule
  ],
  /* All services are registered */
  providers: [],

  /* The root component of the application */
  bootstrap: [
    AppComponent, 
    GreeterComponent,
    CalculatorComponent
  ],

})
export class AppModule { }
