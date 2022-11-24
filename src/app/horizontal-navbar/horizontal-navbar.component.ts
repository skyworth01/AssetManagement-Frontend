import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horizontal-navbar',
  templateUrl: './horizontal-navbar.component.html',
  styleUrls: ['./horizontal-navbar.component.css'],
})
export class HorizontalNavbarComponent implements OnInit {

  name ?= localStorage.getItem('name');
  title ?= localStorage.getItem('title');
  dateTime : Date = new Date();


  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(event:Event) {
    if ((event.target as HTMLInputElement).value=='Software') {
      this.router.navigate(['/dashboard', { outlets: { child1: [ 'software'] }}]);
      
    }
    return false;
  }



}
