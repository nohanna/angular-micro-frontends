import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Remote } from '../../loader/loader.model';

@Component({
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  private mainRemoteSubject: ReplaySubject<Remote> = new ReplaySubject<Remote>();
  private navRemoteSubject: ReplaySubject<Remote> = new ReplaySubject<Remote>();
  mainRemote$: Observable<Remote> = this.mainRemoteSubject.asObservable().pipe(shareReplay());
  navRemote$: Observable<Remote> = this.navRemoteSubject.asObservable().pipe(shareReplay());

  subscription: Subscription = new Subscription();
  navLinks: { name: string, route: string }[];
  sideLinks: { name: string, route: string }[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription.add(
      this.route.paramMap.subscribe(map => {
        this.computeRemotes(map.get('name'));
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

  computeRemotes(name: string): void {
    switch (name) {
      case 'second-app':
        this.navRemoteSubject.next({
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteName: 'profile',
          exposedModule: 'ProfileModule',
          componentName: 'NavComponent'
        });
        this.mainRemoteSubject.next({
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteName: 'profile',
          exposedModule: 'ProfileModule',
          componentName: 'ProfileComponent'
        });
        break;
      case 'third-app':
        this.navRemoteSubject.next({
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          remoteName: 'profile',
          exposedModule: 'ProfileModule',
          componentName: 'NavComponent'
        });
        this.mainRemoteSubject.next({
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          remoteName: 'profile',
          exposedModule: 'ProfileModule',
          componentName: 'ProfileComponent'
        });
        break;
      default:
        break;
    }
  }

}
