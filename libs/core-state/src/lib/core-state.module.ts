import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as fromTacos from './tacos/tacos.reducer';
import { TacosEffects } from './tacos/tacos.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot([TacosEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
  ]
})
export class CoreStateModule {}
