import { Component, Input, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef, ɵcreateInjector, OnDestroy, ComponentRef, OnChanges } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Remote } from "../../loader/loader.model";
import { loadRemoteModule } from "../../utils/federation.utils";

@Component({
  selector: "federated-component",
  templateUrl: "./federated.component.html",
  styleUrls: ["./federated.component.scss"],
})
export class FederatedComponent implements OnInit, OnDestroy {

  @ViewChild('federatedComponent', { read: ViewContainerRef }) private federatedComponent: ViewContainerRef;
  @Input() private remote: Observable<Remote>;
  private cmpRef: ComponentRef<Component>;
  private subscription: Subscription = new Subscription();

  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.remote.subscribe(remote => {
        loadRemoteModule({
          remoteEntry: remote.remoteEntry,
          remoteName: remote.remoteName,
          exposedModule: remote.exposedModule,
        }).then(federated => {
          if (this.cmpRef) this.cmpRef.destroy();
          const component: any = federated[remote.exposedModule].ɵmod.exports.find((e: any) => e.name === remote.componentName);
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
          this.cmpRef = this.federatedComponent.createComponent(
            componentFactory, undefined, ɵcreateInjector(federated[remote.exposedModule], this.injector)
          );
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
