import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Remote } from '../../loader/loader.model';

@Component({
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  remote: Remote;
  subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.paramMap.subscribe(map => this.computeRemote(map.get('name')))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  computeRemote(name: string): void {
    switch (name) {
      case 'second-app':
        this.remote = {
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteName: 'profile',
          exposedModule: 'ProfileModule',
          componentName: 'ProfileComponent'
        };
        break;
      case 'third-app':
        this.remote = {
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          remoteName: 'profile',
          exposedModule: 'ProfileModule',
          componentName: 'ProfileComponent'
        };
        break;
      default:
        break;
    }
  }

}
