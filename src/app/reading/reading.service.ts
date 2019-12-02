import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Reading } from "../_models/reading";
import { environment } from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReadingService {

  constructor(private http: HttpClient) {}

  getLatestReading() : Observable<Reading> {
    return this.http.get<Reading>(`${environment.dexcomServiceBaseUrl}/reading/current`);
  }

  getReadings(size) : Observable<Reading[]> {
    return this.http.get<Reading[]>(`${environment.dexcomServiceBaseUrl}/reading?size=${size}`);
  }

}
