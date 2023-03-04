import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private readonly baseUrl = 'https://api.unsplash.com/users/anissabbagh';
  private readonly accessKey = 'SCPgJBICOSghpLA4OrzI5ksEKj3hZ4gedE7mcbpusV0';
  private readonly maxPerPage = 30;

  constructor(private http: HttpClient) {}

  getUserStatistics(): Observable<any> {
    const url = `${this.baseUrl}`;
    const params = {
      client_id: this.accessKey,
    };
    return this.http.get<any>(url, { params });
  }

  getUserPhotos(): Observable<any[]> {
    this.getUserStatistics().subscribe((x) => console.log(x));

    return this.getUserStatistics().pipe(
      map((stats) => Math.ceil(stats.total_photos / this.maxPerPage)),
      switchMap((pages) => {
        const url = `${this.baseUrl}/photos`;
        const params = {
          client_id: this.accessKey,
          per_page: this.maxPerPage.toString(),
          page: pages.toString(),
        };
        return this.http.get<any[]>(url, { params });
      })
    );
  }
}
