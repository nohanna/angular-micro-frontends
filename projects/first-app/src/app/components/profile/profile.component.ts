import { Component, Input, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef, ɵcreateInjector } from "@angular/core";
import { loadRemoteModule } from "../../utils/federation.utils";

@Component({
  selector: "profile-component",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  @ViewChild('profileComponent', { read: ViewContainerRef })
  private profileComponent!: ViewContainerRef;
  @Input()
  private remoteEntry!: string;
  @Input()
  private remoteName!: string;
  @Input()
  private exposedModule!: string;
  @Input()
  private componentName!: string;

  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    loadRemoteModule({
      remoteEntry: this.remoteEntry,
      remoteName: this.remoteName,
      exposedModule: this.exposedModule,
    }).then(federated => {
      const component: any = federated[this.exposedModule].ɵmod.exports.find((e: any) => e.name === this.componentName);
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const { instance } = this.profileComponent.createComponent(
        componentFactory, undefined, ɵcreateInjector(federated[this.exposedModule], this.injector)
      );
    });
  }

}
