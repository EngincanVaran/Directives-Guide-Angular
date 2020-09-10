import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  onlyOdd = false;
  type: string = "odd";

  toggleOdd() {
    this.onlyOdd = !this.onlyOdd;
    this.type == "odd" ? this.type = "even" : this.type = "odd";
  }

}
