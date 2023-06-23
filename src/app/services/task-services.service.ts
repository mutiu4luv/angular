import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable, } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

const httpOptions  = {
  headers: new HttpHeaders({
    "Content-Type" : "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskServicesService {
  private apiUrl = "http://localhost:5000/api"

  constructor(private http: HttpClient) {}
  
  getTasks(): Observable<Task[]> {    
    // const tasks = of(TASKS)
    // return tasks
    return this.http.get<Task[]>(this.apiUrl + "/rooms/getallrooms")
  }
deleteTask(task:any): Observable<Task>{
  const url = this.apiUrl + "rooms/getallrooms"+task._id
  return this.http.delete<Task>(url)
}
updateTaskReminder(task: any): Observable<Task>{
  const url = this.apiUrl + "rooms/getallrooms"+task._id
  return this.http.put<Task>(url, task, httpOptions )
}

// add task post request

addTask(task: any): Observable<Task>{
  return this.http.post<Task>(this.apiUrl + "/rooms/addrooms", task, httpOptions )
}


  getSIngleRoom(roomId: any): Observable<Task[]> {    
    // const tasks = of(TASKS)
    // return tasks
    return this.http.get<Task[]>(this.apiUrl + `/rooms/${roomId}`)
  }
}
 