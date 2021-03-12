import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Remote } from '../../loader/loader.model';

@Component({
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  mainRemote: Remote;
  navRemote: Remote;
  subscription: Subscription = new Subscription();
  navLinks: { name: string, route: string }[];
  sideLinks: { name: string, route: string }[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.paramMap.subscribe(map => {
        this.computeMainRemote(map.get('name'));
        this.computeNavRemote(map.get('name'));
      })
    );
    this.navLinks = [
      { name: 'Second App', route: '/project/second-app' },
      { name: 'Third App', route: '/project/third-app' }
    ];
    this.sideLinks = [
      { name: 'Laptops', route: '/laptops' },
      { name: 'TVs', route: '/tvs' },
      { name: 'Phones', route: '/phones' }
    ];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  computeNavRemote(name: string): void {
    switch (name) {
      case 'second-app':
        this.navRemote = {
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteName: 'profile',
          exposedModule: 'ProfileModule',
          componentName: 'NavComponent'
        };
        break;
      case 'third-app':
        this.navRemote = {
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          remoteName: 'profile',
          exposedModule: 'ProfileModule',
          componentName: 'NavComponent'
        };
        break;
      default:
        break;
    }
  }

  computeMainRemote(name: string): void {
    switch (name) {
      case 'second-app':
        this.mainRemote = {
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteName: 'profile',
          exposedModule: 'ProfileModule',
          componentName: 'ProfileComponent'
        };
        break;
      case 'third-app':
        this.mainRemote = {
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
