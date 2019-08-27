import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Taco } from '@second-pass/core-data';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'second-pass-taco-details',
  templateUrl: './taco-details.component.html',
  styleUrls: ['./taco-details.component.scss']
})
export class TacoDetailsComponent {
  selectedTaco: Taco;
  
  @Input() group: FormGroup;
  @Input() set taco(value: Taco) {
    this.selectedTaco = value;
    if(!value) return;
    this.group.patchValue({
      id: value.id,
      name: value.name,
      calories: value.calories,
      protein: value.protein,
      salsa: value.salsa,
    });
  }

  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  submit(directive: NgForm) {
    if (this.group.value) {
      this.submitted.emit(this.group.value);
      directive.resetForm();
    }
  }

  cancel() {
    this.cancelled.emit();
  }

  validateField(control: string, directive: NgForm) {
    return this.group.get(control).invalid && directive.submitted;
  }

  determineUpdate() {
    return !!this.group.value.id;
  }
}
