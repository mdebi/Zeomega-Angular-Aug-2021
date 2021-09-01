import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { ElapsedPipe } from './bugs/pipes/elapsed.pipe';
import { TrimTextPipe } from './bugs/pipes/trimText.pipe';
import { BugOperationsService } from './bugs/services/bugOperartions.service';
import { BugStorageService } from './bugs/services/bugStorage.service';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    TrimTextPipe,
    ElapsedPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
   /* 
    BugOperationsService,
    BugStorageService 
    */
    {provide : 'STORAGE', useValue : window.localStorage}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
