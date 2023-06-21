import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  displayedButton = 1;

  onChangeStateClick() {
 
    this.displayedButton = this.displayedButton === 1 ? 2 : 1;
  }
}
