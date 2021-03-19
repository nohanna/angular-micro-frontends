import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'projects/shared/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FederatedComponent } from './components/federated/federated.component';
import { HomeComponent } from './components/home/home.component';
import { MicrofrontendService } from './loader/loader.service';

export function initializeApp(mfService: MicrofrontendService): () => Promise<void> {
  return () => mfService.initialise();
}
@NgModule({
  declarations: [AppComponent, HomeComponent, FederatedComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [
    MicrofrontendService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [MicrofrontendService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
