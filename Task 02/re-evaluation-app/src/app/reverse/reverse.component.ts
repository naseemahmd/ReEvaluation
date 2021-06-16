import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver, ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.css']
})
export class ReverseComponent implements OnInit {
  enterNumber = 0;
  reverseNumber;
  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
  }

  async getReverse(number:number){
    this.enterNumber = number
    
    var res = await this.http.get(`http://localhost:3015/reverse/?num=${this.enterNumber}`).toPromise();
    this.reverseNumber = res
  }

}
