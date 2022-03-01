import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() title = 'Header';
  @Output() headerClick = new EventEmitter<string>();

  onHeaderClick() {
    this.headerClick.emit(this.title)
  }

}
