import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../services/movies/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-detail.component.html',
  styleUrl: './movies-detail.component.css'
})
export class MoviesDetailComponent implements OnInit {

  movieDetails: any;
  movieVideos: any;
  movieId!: number;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.GetMovieDetail(this.movieId);      
      this.GetMovieVideos(this.movieId); 
    });
  }

  GetMovieDetail(movieId: number): void {
    this.moviesService.getMovieDetail(movieId)
    .subscribe(
      (data: any) => {
        this.movieDetails = data;
      }
    );
  }

  GetMovieVideos(movieId: number): void {
    this.moviesService.getMovieVideos(movieId)
    .subscribe(
      (data: any) => {
        this.movieVideos = data.results;
      }
    );
  }
}