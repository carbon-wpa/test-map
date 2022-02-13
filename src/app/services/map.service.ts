import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MapData } from '../models';
import { GeneralHelpers } from '../helpers/general.helpers';
import { map } from 'rxjs/operators';

/*
W "prawdziwym" projekcie dorobiłbym jeszcze genryczną klasę bazową do HTTP,
która była by uzywana przez wszystkie serwisy w apce
 */
@Injectable()
export class MapService {


  public loadData(url: string): Observable<MapData> {
    /*
    idę trochę na skróty bo nie typuje zwrotki z HTTP a posługuję się już interfejsem przemapowanego outputu
     */
    return this.http.get(url)
      .pipe(map(res => GeneralHelpers.snakeCaseToCamelCase(res) as MapData))
  }

  constructor(private readonly http: HttpClient) {
  }

}
