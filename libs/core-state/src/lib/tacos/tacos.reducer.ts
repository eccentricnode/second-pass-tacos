import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Taco } from '@second-pass/core-data';
import { TacosAction, TacosActionTypes } from './tacos.actions';

export interface TacosState extends EntityState<Taco> {
  selectedTacoId: string | null;
}

export const tacosAdapter: EntityAdapter<Taco> = createEntityAdapter<Taco>();

export const initialState: TacosState = tacosAdapter.getInitialState({
  selectedTacoId: null,
});

export function tacosReducer(state: TacosState = initialState, action: TacosAction) {
  switch (action.type) {
    case TacosActionTypes.TACO_SELECTED: {
      return Object.assign({}, state, { selectedTacoId: action.payload });
    }

    case TacosActionTypes.TACOS_LOADED: {
      return tacosAdapter.upsertMany(action.payload, state);
    }

    case TacosActionTypes.TACO_ADDED: {
      return tacosAdapter.addOne(action.payload, state);
    }

    case TacosActionTypes.TACO_UPDATED: {
      return tacosAdapter.upsertOne(action.payload, state);
    }

    case TacosActionTypes.TACO_DELETED: {
      return tacosAdapter.removeOne(action.payload.id, state);
    }

    default: 
      return state;
  }
}

export const getSelectedTacoId = (state: TacosState) => state.selectedTacoId;

// get the selectors

export const {
  selectIds: selectTacosIds,
  selectEntities: selectTacosEntities,
  selectAll: selectAllTacos,
  selectTotal: selectTacosTotal
} = tacosAdapter.getSelectors();
