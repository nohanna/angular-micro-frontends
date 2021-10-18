import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  exportAs: 'NavComponent',
})
export class NavComponent implements OnInit {
  links: { name: string; route: any }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.links = [
      { name: 'Settings', route: ['settings'] },
      { name: 'Second App Custom Link 1', route: ['/test'] },
      { name: 'Second App Custom Link 2', route: ['/test'] },
    ];
  }
}
