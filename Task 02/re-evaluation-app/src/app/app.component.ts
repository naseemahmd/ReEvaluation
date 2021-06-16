import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 're-evaluation-app';
  constructor(private router: Router) { }

  goToPage(pageName:string){
    console.log(pageName,"777");
    this.router.navigate([`./${pageName}`]);
    }
}
