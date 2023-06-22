import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable, } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

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
  getSIngleRoom(roomId: any): Observable<Task[]> {    
    // const tasks = of(TASKS)
    // return tasks
    return this.http.get<Task[]>(this.apiUrl + `/rooms/${roomId}`)
  }
}
 