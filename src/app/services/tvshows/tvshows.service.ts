import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  constructor(private http: HttpClient) { }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=5f2b5e0ae3a00a80c918135739ad8f3f');
  }
}