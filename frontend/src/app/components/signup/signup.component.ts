import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { resString, StatusService } from '../../services/status.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  statusMessage = {} as resString;

  constructor(private statusService: StatusService) { }

  update() {
    this.statusService.getStatus().subscribe((data) => {
      this.statusMessage = data;
      console.log("statusMessage : " + this.statusMessage.message);
      console.log("data : " + {data} )
    })
  }

  ngOnInit(): void {

  }

}
