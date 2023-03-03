import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private http: HttpClient) {}

  getImages() {
    return this.http.get(
      'https://api.unsplash.com/users/anissabbagh/photos?client_id=SCPgJBICOSghpLA4OrzI5ksEKj3hZ4gedE7mcbpusV0'
    );
  }
}
