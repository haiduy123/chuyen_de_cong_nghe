import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnotherService {

  constructor(private _http: HttpClient) {}

  private update = new BehaviorSubject<boolean>(false);
  update$ = this.update.asObservable();

  checkLogin(data: any): Observable<any> {
    return this._http.post('http://localhost:8081/api/users/login', data);
  }

  saveImage(data: any): Observable<any> {
    return this._http.post("http://localhost:8081/api/img", data);
  }

  changeIsUpdate(value: boolean) {
    this.update.next(value);
    console.log('isUpdateClose changed', value);
  }

  deleteImage(id: number): Observable<any> {
    return this._http.delete(`http://localhost:8081/api/img/${id}`);
  }

  deleteFaultyImage(id: number): Observable<any> {
    return this._http.delete(`http://localhost:8081/api/img/faulty/${id}`);
  }

  approveImage(id: number, labelId: number): Observable<any> {
    return this._http.get(`http://localhost:8081/api/img/faulty/${id}/${labelId}`);
  }
}
