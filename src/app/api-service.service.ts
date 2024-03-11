import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJourney } from './Models/Models';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private baseURL = 'https://localhost:44341/api/Journey';

  constructor(private _httpClient: HttpClient) { }

  public getJourney(origen: string, destino: string): Observable<IJourney[]>{ //devuelve observable de un producto
    return this._httpClient.get<IJourney[]>(`${this.baseURL}/${origen}/${destino}`)
  }
}
