import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-binary-preorder',
  templateUrl: './binary-preorder.component.html',
  styleUrls: ['./binary-preorder.component.css']
})
export class BinaryPreorderComponent implements OnInit {

  constructor(private http: HttpClient,) { }
  enterValues:string
  preOrder;
  ngOnInit(): void {
  }

   getLeaf(number:string){
    this.enterValues = number
    console.log(this.enterValues,"ss");
    
    this.http.get(`http://localhost:3015/binaryTree/preOrder/?tree=${this.enterValues}`).toPromise().then(
      res => {
        console.log(res,"res");
        this.preOrder = res
        
      }
    )
  }
}
