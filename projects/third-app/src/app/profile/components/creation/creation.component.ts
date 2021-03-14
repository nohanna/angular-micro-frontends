import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {

  links: { name: string, route: string }[] = []

  constructor() { }

  ngOnInit(): void {
    this.links = [
      { name: 'A creation thing here', route: '/laptops' },
      { name: 'Another creation here', route: '/tvs' }
    ];
  }

}
