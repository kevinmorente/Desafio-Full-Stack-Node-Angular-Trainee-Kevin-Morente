import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ForHeaderService {
  isDisabled = false;
  
  changeIsDisabled = new Observable<boolean>((data) =>{
    this.isDisabled = !this.isDisabled
    console.log(this.isDisabled);
    data.next(this.isDisabled);
  });
}
