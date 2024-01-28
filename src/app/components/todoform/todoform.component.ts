import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
  @Output() getTodo : EventEmitter<string> = new EventEmitter<string>()

  @ViewChild("todo") todoref !: ElementRef; //viewchild decorator bring ref of element in ts of same component
  // 
  constructor() { }

  ngOnInit(): void {
  }

  // todoitem(todo: HTMLInputElement){
  //   if(todo.value){
  //     console.log(todo.value);
  //     this.getTodo.emit(todo.value)    
  //     todo.value = "";
  //   } by using element reference in click event

    // console.log(todo.value);
    //   this.getTodo.emit(todo.value)    
    //   todo.value = "";

    todoitem(){
      let todoref = this.todoref.nativeElement;
      if(todoref.value){
        this.getTodo.emit(todoref.value);
        todoref.value = ''
      }
  }

}
