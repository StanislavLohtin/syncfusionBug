import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyncfusionDiagramComponent } from './syncfusion-diagram/syncfusion-diagram.component';
import {DiagramModule} from "@syncfusion/ej2-angular-diagrams";
import { NoLeakComponent } from './no-leak/no-leak.component';

@NgModule({
  declarations: [
    AppComponent,
    SyncfusionDiagramComponent,
    NoLeakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiagramModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
