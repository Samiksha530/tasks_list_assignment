import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksDataService } from '../../tasks-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @ViewChild('myCheckbox') myCheckbox: any;
  tasksList: Observable<any> | any;
  constructor(private _taskData: TasksDataService) {
    this.setData();
  }

  setData(): Observable<any> | any {
    this._taskData.getData().subscribe((res) => {
      console.log(res);
      this.tasksList = res;
    });
  }

  doSomething(event: any) {
    if (event.target.checked == true) {
      alert('Tasks was completed !');
    }
  }
}
