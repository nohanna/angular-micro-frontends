import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { filter, shareReplay } from 'rxjs/operators';
import { Remote } from './loader/loader.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private navRemoteSubject: ReplaySubject<Remote | null> = new ReplaySubject<Remote | null>();
  navRemote$: Observable<Remote> = this.navRemoteSubject.asObservable().pipe(shareReplay());

  subscription: Subscription = new Subscription();
  navLinks: { name: string; route: string }[];
  sideLinks: { name: string; route: string }[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription.add(
      this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
        const segment: string = window.location.href.split('/')[3];
        this.computeRemotes(segment);
      }),
    );
    this.navLinks = [
      { name: 'Second App', route: '/second' },
      { name: 'Third App', route: '/third' },
    ];
    this.sideLinks = [
      { name: 'Laptops', route: '/laptops' },
      { name: 'TVs', route: '/tvs' },
      { name: 'Phones', route: '/phones' },
    ];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  computeRemotes(name: string): void {
    switch (name) {
      case 'second':
        this.navRemoteSubject.next({
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          remoteName: 'secondApp',
          exposedModule: 'ProfileModule',
          componentName: 'NavComponent',
        });
        break;
      case 'third':
        this.navRemoteSubject.next({
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          remoteName: 'thirdApp',
          exposedModule: 'ProfileModule',
          componentName: 'NavComponent',
        });
        break;
      default:
        this.navRemoteSubject.next(null);
        break;
    }
  }
}
