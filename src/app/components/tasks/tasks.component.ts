import { TaskServicesService } from './../../services/task-services.service';
import { Component, OnInit } from '@angular/core';
// import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 tasks: any 
 allTask:any
 constructor(private taskServiceService:TaskServicesService) {}

 ngOnInit()  {
 this.taskServiceService.getTasks().subscribe((tasks) =>  {
  

  this.tasks = tasks
  this.allTask = this.tasks.rooms
  console.log(this.tasks.rooms)
 })
 }

 deleteTask(task: any) {
  

  this.taskServiceService.deleteTask(task).subscribe( 
    () =>  (

      
this.allTask = this.tasks.rooms.filter((t:any) => t.id !== task.id )
 
    )
    )

}

toggleReminder(task: any) {
  task.reminder = !task.reminder
  console.log(task.reminder)
}

}
