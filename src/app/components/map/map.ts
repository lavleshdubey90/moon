import { Component, Input, AfterViewInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css',
})

export class Map implements AfterViewInit {
  @Input() zoom: number = 3;
  @Input() center: [number, number] = [0, 0];
  protected map: any;

  ngAfterViewInit() {
    this.map = new (window as any).maplibregl.Map({
      container: 'map',
      style: `https://api.jawg.io/styles/jawg-lagoon.json?access-token=${environment.jawgMapsAccessToken}`,
      zoom: this.zoom,
      center: this.center
    });
    (window as any).maplibregl.setRTLTextPlugin(
      'https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.3.0/dist/mapbox-gl-rtl-text.js'
    );
  }
}
