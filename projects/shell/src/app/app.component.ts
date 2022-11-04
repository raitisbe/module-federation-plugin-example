import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { SharedLibService } from 'shared-lib';
import { HttpClient } from '@angular/common/http';
import VectorLayer from "ol/layer/Vector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  constructor(private service: AuthLibService, http: HttpClient, private sharedService: SharedLibService) {
    this.service.login('Max', null);
    if(this.service.layer instanceof VectorLayer) {
      console.log( 'Layer is of type VectorLayer. CORRECT');
    } else {
      console.error( 'Layer is not of type VectorLayer. INCORRECT');
    }
    if(this.sharedService.layer instanceof VectorLayer) {
      console.log( 'Shared Layer is of type VectorLayer. CORRECT');
    } else {
      console.error( 'Layer is not of type VectorLayer. INCORRECT');
    }
    
  }

}

