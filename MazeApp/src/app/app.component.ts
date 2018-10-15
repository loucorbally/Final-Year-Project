import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({
  selector: 'form-field-overview-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent {
  constructor(private router: Router) {} 
  title = 'Maze';

  goContact() {
    this.router.navigate(['contact']); 
  }
}
