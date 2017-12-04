import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, Inject} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatTooltipModule,
  MatDialog,
  MAT_DIALOG_DATA,
  MatExpansionModule,
  MatSelectModule
} from '@angular/material';

import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations'
import { templateJitUrl } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatTooltipModule,
    NoopAnimationsModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatTooltipModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@Component({
  selector:'appcomponent',
  templateUrl:'app.component.html'
})

export class appComponent{
  constructor(public dialog:MatDialog){}

  openDialogCase(){
        this.dialog.open(DialogCase);
  }
}

@Component({
  selector: 'dialogcase',
  templateUrl:'dialogcase.html'
})

export class DialogCase{
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}
}