import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface faceTask {
  message: string,
    result: [
      {
        id: number,
        uuidtask: string,
        email: string,
        task: string,
        priority: number,
        status: number
      }
    ]
}
@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  listGet() {
    return this.http.get<faceTask>(this.apiUrl + "/list/gettask", {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  addTask(form: any) {
    return this.http.post(this.apiUrl + "/list/addtask", form, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  deleteTask(taskuuid: string) {
    return this.http.delete(this.apiUrl + `/list/deletetask/${taskuuid}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  updateTask(taskuuid: string) {
    return this.http.put(this.apiUrl + `/list/deletetask/${taskuuid}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
}
