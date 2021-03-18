import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {

  @Input() navLinks: { name: string, route: string }[];
  @Input() sideLinks: { name: string, route: string }[];

}
