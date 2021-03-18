import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  links: { name: string; route: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.links = [
      { name: 'Creation', route: '/third/creation' },
      { name: 'Third App Custom 2', route: '/tvs' },
      { name: 'Third App Custom 3', route: '/phones' },
    ];
  }
}
