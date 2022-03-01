import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() title = 'Header';
  @Input() clickCount = 0;
  @Output() headerClick = new EventEmitter<number>();

  /**
   * @description Emit event to parent when click on header component
   */
  onHeaderClick() {
    this.headerClick.emit(this.clickCount + 1);
  }

}
