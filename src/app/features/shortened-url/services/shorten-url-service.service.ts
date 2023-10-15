import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ShortenedUrlResponse } from '../model/shortened-url-response';
import { ShortenedUrl } from '../model/shortened-url';

export const API_HOST = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ShortenUrlServiceService {
  
  refresh$ = new BehaviorSubject(true);

  constructor(private http: HttpClient) {
  }

  shorten(url: string): Observable<ShortenedUrlResponse> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("url", url);
 
    return this.http.get<ShortenedUrlResponse>(API_HOST, {params: queryParams})
      .pipe(tap(() => this.triggerRefresh()));
  }

  findAll(): Observable<Array<ShortenedUrl>> {
    return this.http.get<Array<ShortenedUrl>>(`${API_HOST}/api/shortened-urls`);
  }

  delete(shortened: ShortenedUrl): Observable<void> {
    return this.http.delete<void>(`${API_HOST}/api/shortened-urls/${shortened.token}`)
      .pipe(tap(() => this.triggerRefresh()));
  }

  triggerRefresh(): void {
    this.refresh$.next(true);
  }

}
