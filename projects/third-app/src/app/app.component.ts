import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  navLinks: { name: string; route: string }[];
  sideLinks: { name: string; route: string }[];

  ngOnInit(): void {
    this.navLinks = [
      { name: 'Something', route: '/test' },
      { name: 'Something else', route: '/test' },
    ];
    this.sideLinks = [
      { name: 'A link', route: '/test' },
      { name: 'Another one', route: '/test' },
      { name: 'Whatever', route: '/test' },
    ];
  }
}
