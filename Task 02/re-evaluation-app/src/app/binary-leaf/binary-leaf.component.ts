import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-binary-leaf',
  templateUrl: './binary-leaf.component.html',
  styleUrls: ['./binary-leaf.component.css']
})
export class BinaryLeafComponent implements OnInit {

  constructor(private http: HttpClient,) { }
  enterValues:string
  leaf= null
  ngOnInit(): void {
  }

  getLeaf(number:string){
    this.enterValues = number
    const promise =this.http.get(`${environment.apiUrl}/binaryTree/?tree=${this.enterValues}`).toPromise()
    promise.then((respoence) =>
      this.leaf = respoence
    )
  }
}
