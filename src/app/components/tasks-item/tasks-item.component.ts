// import { Task } from 'src/app/Task';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Task} from "../../Task"
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: any
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
   @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes
 
constructor() {}
ngOnInit(): void {}

onDelete(task: any) {
this.onDeleteTask.emit(task)
// console.log(task) 
  
}

onToggle(task: any) {
this.onToggleReminder.emit(task)
// console.log(task) 
  
}

}
