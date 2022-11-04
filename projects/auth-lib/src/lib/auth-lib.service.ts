import { Injectable } from '@angular/core';
import { Geometry } from 'ol/geom';
import VectorLayer from "ol/layer/Vector";
import VectorSource from 'ol/source/Vector';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  private userName: string;
  layer: VectorLayer<VectorSource<Geometry>>;

  public get user(): string {
    return this.userName;
  }

  constructor() {
    this.layer = new VectorLayer();
   }

  public login(userName: string, password: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userName = userName;
  }

}
