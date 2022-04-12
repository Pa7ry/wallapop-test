import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../../models/items.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<Items> {
    return this.http.get<Items>(`${environment.urlItems}`);
  }
}
