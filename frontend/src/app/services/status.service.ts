import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface resString {
  message: string
}

export interface formUser {
  nome: string;
  email: string;
  senha: string;
}

export class GlobalConstants {
  //Message
  public static genericError: string = "Something went wrong. Please try again later";

  //Regex
  public static nameRegex: string = "[a-zA-Z0-9 ]*";

  public static emailRegex: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

  public static contactNumberRegex: string = "^[e0-9]{10,10}$";

  //Variable
  public static error: string = "error";
}

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getStatus() {
    return this.http.get<resString>(this.apiUrl);
  }

  registerUsers(form: any) {
    return this.http.post(this.apiUrl + "/users/signup", form, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  loginUsers(form: any) {
    return this.http.post(this.apiUrl + "/users/login", form, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
}
