import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  someArray = [1, 2, 3]

  results = [
    { id: 1, name: 'abc' },
    { id: 2, name: 'xyz' },
    { id: 4, name: 'pqr' }]
}
