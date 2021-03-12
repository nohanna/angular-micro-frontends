import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() links: { name: string, route: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.links = [
      { name: 'Third App Custom 1', route: '/laptops' },
      { name: 'Third App Custom 2', route: '/tvs' },
      { name: 'Third App Custom 3', route: '/phones' }
    ];
  }

}
