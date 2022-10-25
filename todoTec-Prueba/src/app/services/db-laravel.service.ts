import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IModal } from '../interfaces/IModal.interface';
import { IData } from '../interfaces/IData.interface';
@Injectable({
  providedIn: 'root'
})
export class DbLaravelService {

  constructor(private http: HttpClient) { }




  getAdministrador = ():Observable<IData[]> =>{
    return this.http.get<IData[]>(`http://127.0.0.1:8000/api/administradors`);
  }

  postAdministrador = (paydload: IModal)=>{
    return this.http.post(`http://127.0.0.1:8000/api/administradors/register`, paydload)
  }



}
