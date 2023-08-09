import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TasksDataService {
  constructor(private _httpclient: HttpClient) {}

  private Url = 'https://jsonplaceholder.typicode.com/todos';

  getData(): Observable<any> {
    return this._httpclient.get(this.Url);
  }
}
