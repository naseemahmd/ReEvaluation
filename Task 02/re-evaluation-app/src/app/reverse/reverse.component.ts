import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.css']
})
export class ReverseComponent implements OnInit {
  enterNumber = 0;
  reverseNumber=null;
  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
  }

  async getReverse(number:number){
    this.enterNumber = number
    
    var respoence = await this.http.get(`${environment.apiUrl}/reverse/?num=${this.enterNumber}`).toPromise();
    this.reverseNumber = respoence
  }

}
