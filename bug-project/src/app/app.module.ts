import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SyncfusionDiagramComponent } from './syncfusion-diagram/syncfusion-diagram.component';
import {DiagramModule} from "@syncfusion/ej2-angular-diagrams";

@NgModule({
  declarations: [
    AppComponent,
    SyncfusionDiagramComponent
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
