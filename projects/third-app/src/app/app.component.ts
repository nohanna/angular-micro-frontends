import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navLinks: { name: string; route: string }[] = [];
  sideLinks: { name: string; route: string }[] = [];

  ngOnInit(): void {
    this.navLinks = [
      { name: 'A link', route: '/test' },
      { name: 'Another one', route: '/test' },
    ];
    this.sideLinks = [
      { name: 'Something', route: '/ok' },
      { name: 'Whatever', route: '/ok' },
    ];
  }
}
