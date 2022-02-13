import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MapStoreService } from '../../store/map-store.service';
import { LoadingState } from '../../models';

@Component({
  selector: 'tmap-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.scss']
})
export class LocationInputComponent {

  public readonly LoadingState = LoadingState;
  public locationAddress: string = `${environment.apiBaseUrl}/laboratoria/inne`;

  constructor(public readonly mapStore: MapStoreService) {
  }

  public loadData() {
    this.mapStore.loadData(this.locationAddress);
  }
}
