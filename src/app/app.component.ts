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

  onHeaderClick() {
    console.log(this.clickCount + 1);
    this.headerClick.emit(this.clickCount + 1);
  }

}
