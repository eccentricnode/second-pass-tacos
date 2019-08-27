import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators';
import { select, Store, ActionsSubject } from '@ngrx/store';

import { selectAllTacos, selectCurrentTaco } from './tacos.selectors';
import { Taco } from '@second-pass/core-data';
import { TacosState } from './tacos.reducer';
import * as TacosActions from './tacos.actions';
import { TacosActionTypes } from './tacos.actions';

@Injectable()
export class TacosFacade { 
    allTacos$ = this.store.pipe(select(selectAllTacos));
    selectedTaco$ = this.store.pipe(select(selectCurrentTaco));

    mutations$ = this.actions$
        .pipe(
            filter(action => 
                action.type === TacosActionTypes.ADD_TACO
                || action.type === TacosActionTypes.UPDATE_TACO
                || action.type === TacosActionTypes.DELETE_TACO
            )
        );

    constructor(private store: Store<TacosState>, private actions$: ActionsSubject) { }

    selectTaco(tacoId: string) {
        this.store.dispatch(new TacosActions.TacoSelected(tacoId));
    }

    loadTacos() {
        this.store.dispatch(new TacosActions.LoadTacos());
    }

    createTaco(taco: Taco) {
        this.store.dispatch(new TacosActions.AddTaco(taco));
    }

    updateTaco(taco: Taco) {
        this.store.dispatch(new TacosActions.UpdateTaco(taco));
    }

    deleteTaco(taco: Taco) {
        this.store.dispatch(new TacosActions.DeleteTaco(taco));
    }
}   