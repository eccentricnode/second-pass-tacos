import { Action } from '@ngrx/store';

import { Taco } from '@second-pass/core-data';

export enum TacosActionTypes {
  TACOS_ACTION  = '[TACOS] Tacos Action',
  TACO_SELECTED = '[TACOS] Taco Selected',
  LOAD_TACOS    = '[TACOS] Load Tacos',
  TACOS_LOADED  = '[TACOS] Tacos Loaded',
  ADD_TACO      = '[TACOS] Add Taco',
  TACO_ADDED    = '[TACOS] Taco Added',
  UPDATE_TACO   = '[TACOS] Update Taco',
  TACO_UPDATED  = '[TACOS] Taco Updated',
  DELETE_TACO   = '[TACOS] Delete Taco',
  TACO_DELETED  = '[TACOS] Taco Deleted',
}

export class Tacos implements Action {
  readonly type = TacosActionTypes.TACOS_ACTION;
}

export class TacoSelected implements Action {
  readonly type = TacosActionTypes.TACO_SELECTED;
  constructor(public payload) { }
}

export class LoadTacos implements Action {
  readonly type = TacosActionTypes.LOAD_TACOS;
  constructor(){ }
}

export class TacosLoaded implements Action {
  readonly type = TacosActionTypes.TACOS_LOADED;
  constructor(public payload: Taco[]) { }
}

export class AddTaco implements Action {
  readonly type = TacosActionTypes.ADD_TACO;
  constructor(public payload: Taco) { }
}

export class TacoAdded implements Action {
  readonly type = TacosActionTypes.TACO_ADDED;
  constructor(public payload: Taco) { }
}

export class UpdateTaco implements Action {
  readonly type = TacosActionTypes.UPDATE_TACO;
  constructor(public payload: Taco) { }
}

export class TacoUpdated implements Action {
  readonly type = TacosActionTypes.TACO_UPDATED;
  constructor(public payload: Taco) { }
}

export class DeleteTaco implements Action {
  readonly type = TacosActionTypes.DELETE_TACO;
  constructor(public payload: Taco) { }
}

export class TacoDeleted implements Action {
  readonly type = TacosActionTypes.TACO_DELETED;
  constructor(public payload: Taco) { }
}

export type TacosAction = Tacos
  | TacoSelected
  | LoadTacos
  | TacosLoaded
  | AddTaco
  | TacoAdded
  | UpdateTaco
  | TacoUpdated
  | DeleteTaco
  | TacoDeleted
;
