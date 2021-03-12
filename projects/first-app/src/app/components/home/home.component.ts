import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Remote } from '../../loader/loader.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  navLinks: { name: string, route: string }[];
  sideLinks: { name: string, route: string }[];

  constructor() { }

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
