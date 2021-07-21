import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragComponent } from './components/drag/drag.component';
import { DropComponent } from './components/drop/drop.component';
import { StylesComponent } from './components/styles/styles.component';

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    DropComponent,
    StylesComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    DragDropModule
  ],
  providers: [DragDropModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
