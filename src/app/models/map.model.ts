/*
Modele zrobiłem na czystych interfejsach z wykorzystaniem helpera mapującego.
Oczywiście może używać różnież klas, jednka z naszej rozmowmy wynikało, że pan Marek jest bardzeij zwolennikiem interfejsów :)
 */

export interface MapData {
  cords: MapDataCords;
  laboatoria: MapDataLab[]
}

export interface MapDataCords {
  avgLat?: number;
  avgLng?: number;
  maxLat?: number;
  maxLng?: number;
  minLat?: number;
  minLng?: number;
  zoom?: number;
}

export interface MapDataLab {
  adres?: string;
  gpsLat?: number
  gpsLng?: number;
  id?: number;
  info?: string;
  kodPocztowy?: string;
  miejscowosc?: string;
  nazwa?: string;
  tel?: string;
}

export enum LoadingState {
  loading = 'loading',
  ready = 'ready'
}
