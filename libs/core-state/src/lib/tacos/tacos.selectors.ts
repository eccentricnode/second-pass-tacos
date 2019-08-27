import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromTacos from './tacos.reducer';
import { emptyTaco } from '@second-pass/core-data';

// Lookup the 'Tacos' feature state managed by NgRx
export const selectTacosState = createFeatureSelector<fromTacos.TacosState>('tacos');

export const selectTacosIds = createSelector(
  selectTacosState,
  fromTacos.selectTacosIds
);

export const selectTacosEntities = createSelector(
  selectTacosState,
  fromTacos.selectTacosEntities
);

export const selectAllTacos = createSelector(
  selectTacosState,
  fromTacos.selectAllTacos
);

export const selectCurrentTacoId = createSelector(
  selectTacosState,
  fromTacos.getSelectedTacoId
);

export const selectCurrentTaco = createSelector(
  selectTacosEntities,
  selectCurrentTacoId,
  (tacosEntities, tacoId) => {
    return tacoId ? tacosEntities[tacoId] : Object.assign({}, emptyTaco);
  }
);