import { Input } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  @Input() links?: { name: string, route: string }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
