import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReverseComponent, } from './reverse/reverse.component';
import { BinaryLeafComponent } from './binary-leaf/binary-leaf.component';
import { BinaryPreorderComponent } from './binary-preorder/binary-preorder.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BinaryLeafComponent,
    BinaryPreorderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
