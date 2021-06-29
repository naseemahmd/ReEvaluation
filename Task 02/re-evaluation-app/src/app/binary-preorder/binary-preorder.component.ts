import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-binary-preorder',
  templateUrl: './binary-preorder.component.html',
  styleUrls: ['./binary-preorder.component.css']
})
export class BinaryPreorderComponent implements OnInit {

  constructor(private http: HttpClient,) { }
  enterValues:string
  preOrder=null;
  ngOnInit(): void {
  }

   getLeaf(number:string){
    this.enterValues = number    
    this.http.get(`${environment.apiUrl}/binaryTree/preOrder/?tree=${this.enterValues}`).toPromise().then(
      respoence => {
        console.log(respoence,"responce");
        this.preOrder = respoence
        
      }
    ).catch(
      error =>{
        alert("Somthing went Wrong")
      }
    )
    
  }
}
