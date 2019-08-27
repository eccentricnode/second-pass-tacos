import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { TacosState } from './tacos.reducer';
import { 
  TacosActionTypes,
  LoadTacos,
  TacosLoaded,
  AddTaco,
  TacoAdded,
  UpdateTaco,
  TacoUpdated,
  DeleteTaco,
  TacoDeleted
} from './tacos.actions';
import { TacosService, Taco } from '@second-pass/core-data';

@Injectable()
export class TacosEffects {
  @Effect() loadTacos$ = this.dataPersistence.fetch(TacosActionTypes.LOAD_TACOS, {
    run: (action: LoadTacos, state: TacosState) => {
      return this.tacosService.all().pipe(map((res: Taco[]) => new TacosLoaded(res)));
    },

    onError: (action: LoadTacos, error) => {
      console.error('Error', error);
    }
  });

  @Effect() addTaco$ = this.dataPersistence.pessimisticUpdate(TacosActionTypes.ADD_TACO, {
    run: (action: AddTaco, state: TacosState) => {
      return this.tacosService.create(action.payload).pipe(map((res: Taco) => new TacoAdded(res)));
    },

    onError: (action: AddTaco, error) => {
      console.error('Error', error);
    }
  });

  @Effect() updateTaco$ = this.dataPersistence.pessimisticUpdate(TacosActionTypes.UPDATE_TACO, {
    run: (action: UpdateTaco, state: TacosState) => {
      return this.tacosService.update(action.payload).pipe(map((res: Taco) => new TacoUpdated(res)));
    },

    onError: (action: UpdateTaco, error) => {
      console.error('Error', error);
    }
  });

  @Effect() deleteTaco$ = this.dataPersistence.pessimisticUpdate(TacosActionTypes.DELETE_TACO, {
    run: (action: DeleteTaco, state: TacosState) => {
      return this.tacosService.delete(action.payload.id).pipe(map(_ => new TacoDeleted(action.payload)));
    },

    onError: (action: DeleteTaco, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<TacosState>,
    private tacosService: TacosService
  ) {}
}
