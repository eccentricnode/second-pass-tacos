import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Taco } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-tacos-list',
  templateUrl: './tacos-list.component.html',
  styleUrls: ['./tacos-list.component.scss']
})
export class TacosListComponent {
  @Input() tacos: Taco[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  select(taco: Taco) {
    this.selected.emit(taco);
  }

  remove(taco: string) {
    this.deleted.emit(taco);
  }
}
