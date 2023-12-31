import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballRecordsService {

  readonly apiUrl = 'https://localhost:7193/api/FootballRecords/';
  constructor(private http: HttpClient) { }

  getFootballRecords(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'GetAllFootballRecords');
  }

  deleteFootballRecord(recordToDelete: number): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl + 'DeleteFootballRecord', recordToDelete);
  }
  

}
