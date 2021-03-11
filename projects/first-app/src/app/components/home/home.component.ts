import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Remote } from '../../loader/loader.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  links: { name: string, route: string }[];

  constructor() { }

  ngOnInit(): void {
    this.links = [
      { name: 'second-app', route: '/project/second-app' },
      { name: 'third-app', route: '/project/third-app' }
    ];
  }

}
