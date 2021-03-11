import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  links: { name: string, route: string }[];

  constructor() { }

  ngOnInit(): void {
    this.links = [
      { name: 'Settings', route: 'home' },
      { name: 'View', route: 'home' }
    ];
  }

}
