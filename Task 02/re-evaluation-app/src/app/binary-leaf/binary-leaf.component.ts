import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-binary-leaf',
  templateUrl: './binary-leaf.component.html',
  styleUrls: ['./binary-leaf.component.css']
})
export class BinaryLeafComponent implements OnInit {

  constructor(private http: HttpClient,) { }
  enterValues:string
  leaf
  ngOnInit(): void {
  }

  getLeaf(number:string){
    this.enterValues = number
    const promise =this.http.get(`http://localhost:3015/binaryTree/?tree=${this.enterValues}`).toPromise()
    promise.then((res) =>
      this.leaf = res
    )
  }
}
