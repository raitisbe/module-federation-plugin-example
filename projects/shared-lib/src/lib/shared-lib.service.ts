import { Injectable } from '@angular/core';
import { Geometry } from 'ol/geom';
import VectorLayer from "ol/layer/Vector";
import VectorSource from 'ol/source/Vector';


@Injectable({
  providedIn: 'root'
})
export class SharedLibService {
  layer: VectorLayer<VectorSource<Geometry>>;
  constructor() { 
    this.layer = new VectorLayer();
  }
}
