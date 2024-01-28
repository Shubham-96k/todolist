import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';
  skillsArray : Array<string> = ['Html 5', 'CSS 3', 'Javascript', 'Angular', 'Node']

  // addtodo(todo: HTMLInputElement){
  //   // console.log(todo);
  //   if(todo.value){
  //     console.log(todo.value);
  //     this.skillsArray.push(todo.value);
  //     todo.value = "";
  //   }
  // }

  addtodoitem(todo : string){
    console.log(todo);
    this.skillsArray.push(todo);
  }
}
