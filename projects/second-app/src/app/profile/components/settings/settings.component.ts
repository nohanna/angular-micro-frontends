import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  links: { name: string, route: string }[] = []

  constructor() { }

  ngOnInit(): void {
    this.links = [
      { name: 'A setting thing here', route: '/laptops' },
      { name: 'Another setting here', route: '/tvs' }
    ];
  }

}
