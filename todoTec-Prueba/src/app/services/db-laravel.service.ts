import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.post(`http://127.0.0.1:8000/api/administradors/register`, paydload);
  }


  updateAdministrador = (paydload: IData)=>{
    return this.http.put(`http://127.0.0.1:8000/api/administradors/actulizacion`, paydload);

  }

  deleteAdministrador = (id: number)=>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id
      },
    };
    return this.http.delete(`http://127.0.0.1:8000/api/administradors/eliminacion`, options);
  }



}
