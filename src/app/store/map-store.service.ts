import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { LoadingState, MapDataCords, MapDataLab } from '../models';
import { MapService } from '../services/map.service'
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

/*
Chviałem pokazać jak w przypadku component store fajnie można przekazywać stan wewnątrz modułu bez żadnych inputów/outputów czy też serwisów.
Datatkowo można dzięki temu przepiąc aplikację w tryb changeDetection = onPush co zwiekszy wydajność
 */

@Injectable()
export class MapStoreService extends ComponentStore<MapStoreState> {

  readonly loading$: Observable<LoadingState> = this.select(s => s.loading)
    .pipe(map(res => res ? LoadingState.loading : LoadingState.ready));
  readonly labs$: Observable<MapDataLab[]> = this.select(s => s.labs);
  readonly cords$: Observable<MapDataCords> = this.select(s => s.cords);


  readonly loadData = this.effect((urlInput: Observable<string>) =>
    urlInput.pipe(
      tap(() => this.patchState({loading: true})),
      switchMap((url: string) => this.mapService.loadData(url)),
      tap((res) => this.patchState({
        loading: false,
        labs: res?.laboatoria,
        cords: res?.cords
      }))
    )
  );

  constructor(private readonly mapService: MapService) {

    //todo  nie traciłem czasu żeby poprawnie skonfigurować lintera
    super({
      // @ts-ignore
      cords: null,
      labs: [],
      loading: false
    })
  }
}

export interface MapStoreState {
  cords: MapDataCords;
  labs: MapDataLab[];
  loading: boolean;
}
