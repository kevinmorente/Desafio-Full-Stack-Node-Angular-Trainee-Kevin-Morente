import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface resString {
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private apiUrl = 'http://localhost:8080/users'; // URL do endpoint no servidor backend

  constructor(private http: HttpClient) {}

  getStatus() {
    return this.http.get<resString>(this.apiUrl);
  }
}
