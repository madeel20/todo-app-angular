import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  name:string = 'adeel'
  constructor(){
    this.changeName('rabia')
  }
  changeName(name:string):void {
    this.name = name;
  }
}
