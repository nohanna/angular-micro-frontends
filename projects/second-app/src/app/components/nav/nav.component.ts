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
      { name: 'Settings', route: '/settings' },
      { name: 'Second App Custom 2', route: '/test' },
      { name: 'Second App Custom 3', route: '/test' },
    ];
  }
}
