import { Component, OnInit } from '@angular/core';
import { MapStoreService } from '../../store/map-store.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'tmap-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  public mapData$ = this.mapStore.cords$
    .pipe(
      filter(res => !!res)
    );

  constructor(public readonly mapStore: MapStoreService) { }

  ngOnInit(): void {
  }

}
