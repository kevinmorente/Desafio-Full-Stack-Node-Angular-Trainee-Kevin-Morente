import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../services/snackbar.service';
import { HttpClient } from '@angular/common/http';
import { faceTask, TodolistService } from '../../services/todolist.service';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../services/status.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit, AfterViewInit {
  responseMessage: any;
  task: any;
  taskInfos: any[] = [];
  taskForm: any = FormGroup;

  getPriorityLabel(priority: number): string {
    switch (priority) {
      case 1:
        return 'High';
      case 2:
        return 'Intermediate';
      case 3:
        return 'Low';
      default:
        return '';
    }
  }

  getStatusLabel(status: any): string {
    switch (status) {
      case 1:
        return 'Open task';
      case 2:
        return 'Closed task';
      default:
        return '';
    }
  }


  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService,
    private TodolistService: TodolistService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.createFormTask()
  }

  getList() {
    return this.TodolistService.listGet().subscribe(response => {
      this.task = response.message;
      this.taskInfos = response.result;
      console.log(this.taskInfos);
      this.snackbarService.openSnackbar(response.message, '');
    }, (error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackbar(this.responseMessage, GlobalConstants.error);
    });
  }

  createFormTask() {
    this.taskForm = this.fb.group({
      task: ['', [Validators.required]],
      priority: ['', [Validators.required]],
    });
  }

  addlistTask() {
    console.log(this.taskForm.value)
    var data = this.taskForm.value
    this.TodolistService.addTask(data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.snackbarService.openSnackbar(response.message, '');
      this.getList();
    }, (error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackbar(this.responseMessage, GlobalConstants.error);
    })
  }

  taskDelete(taskuuid: string) {
    this.TodolistService.deleteTask(taskuuid).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.snackbarService.openSnackbar(response.message, '');
      this.getList();
    }, (error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackbar(this.responseMessage, GlobalConstants.error);
    })
  }

  taskUpdate(taskuuid: string, task: any) {
    if (task.status === 1) {
      task.status = 2;
    } else {
      task.status = 1;
    }
    console.log(task)
    console.log("jsonString aqui: " + task)
    this.TodolistService.updateTask(taskuuid, task).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.snackbarService.openSnackbar(response.message, '');
      // this.getList();
    }, (error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackbar(this.responseMessage, GlobalConstants.error);
    })

  }

}
