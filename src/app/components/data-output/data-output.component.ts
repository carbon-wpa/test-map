import { Component, OnInit } from '@angular/core';
import { MapStoreService } from '../../store/map-store.service';

@Component({
  selector: 'tmap-data-output',
  templateUrl: './data-output.component.html',
  styleUrls: ['./data-output.component.scss']
})
export class DataOutputComponent implements OnInit {

  constructor(public readonly mapStore: MapStoreService) { }

  ngOnInit(): void {
  }

}
