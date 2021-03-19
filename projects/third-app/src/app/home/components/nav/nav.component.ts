import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  links: { name: string; route: any }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.links = [
      { name: 'Creation', route: [{}, 'creation'] },
      { name: 'Third App Custom 2', route: '/test' },
      { name: 'Third App Custom 3', route: '/test' },
    ];
  }
}
