import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text!: string
  day!:string 
  reminder:boolean =false
constructor() {}

onSubmit() {
  if (!this.text){
    alert("pls add a task")
    return
  }
const newTask = {
  text: this.text, 
  day: this.day,
  reminder: this.reminder, 
}
// todo emit event

this.onAddTask.emit(newTask)
this.text = ''
this.day = ''
this.reminder = false

}
}
 