import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguagePickerComponent, LocationInputComponent, MapViewComponent, DataOutputComponent } from './components';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MapStoreService } from './store/map-store.service';
import { MapService } from './services/map.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';


export const angularMaterials = [
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule,
];

/*
Aplikacja jest jedno modułowa -  w "prawdziwej" aplikacji oczywiście byłby jeszcze routing
i wszystko elegnacko podzielone na moduły"
 */

@NgModule({
  declarations: [
    AppComponent,
    LanguagePickerComponent,
    LocationInputComponent,
    MapViewComponent,
    DataOutputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapApiKey
    }),
    angularMaterials,
  ],
  providers: [MapStoreService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
