import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navLinks: { name: string, route: string }[] = [];
  sideLinks: { name: string, route: string }[] = [];

  ngOnInit(): void {
    this.navLinks = [
      { name: 'Second App', route: '/project/second-app' },
      { name: 'Third App', route: '/project/third-app' }
    ];
    this.sideLinks = [
      { name: 'Laptops', route: '/laptops' },
      { name: 'TVs', route: '/tvs' },
      { name: 'Phones', route: '/phones' }
    ];
  }

}
