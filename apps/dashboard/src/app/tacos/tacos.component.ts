import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Taco } from '@second-pass/core-data';
import { TacosFacade } from '@second-pass/core-state';

@Component({
  selector: 'second-pass-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.scss']
})
export class TacosComponent implements OnInit {
  form: FormGroup;
  tacos$: Observable<Taco[]> = this.tacosFacade.allTacos$;
  selectedTaco$: Observable<Taco> = this.tacosFacade.selectedTaco$;

  constructor(
    private tacosFacade: TacosFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.tacosFacade.loadTacos();
    this.initForm();
    this.tacosFacade.mutations$.subscribe(_ => this.reset());
    this.reset();
  }

  selectTaco(taco) {
    this.tacosFacade.selectTaco(taco.id);
  }

  saveTaco(taco) {
    taco.id ? this.tacosFacade.updateTaco(taco) : this.tacosFacade.createTaco(taco);  
  }

  removeTaco(taco: Taco) {
    this.tacosFacade.deleteTaco(taco);
    this.reset();
  }

  reset() {
    this.form.reset();
    this.selectTaco({id: null});
  }

  private initForm() {
    this.form = this.formBuilder.group ({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      calories: [null, Validators.compose([Validators.required])],
      protein: ['', Validators.compose([Validators.required])],
      salsa: ['', Validators.compose([Validators.required])],
    });
  }
}
