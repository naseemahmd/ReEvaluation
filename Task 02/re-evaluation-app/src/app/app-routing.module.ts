import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component'
import {ReverseComponent} from './reverse/reverse.component'
import {BinaryLeafComponent} from './binary-leaf/binary-leaf.component'
import {BinaryPreorderComponent} from './binary-preorder/binary-preorder.component'

const routes: Routes = [
  { path: 'reverse', component:ReverseComponent},
  { path: 'leaf', component:BinaryLeafComponent},
  { path:'preOrder',component:BinaryPreorderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ReverseComponent]
