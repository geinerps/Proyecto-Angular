import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoviesService } from '../services/movies/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {

  movies: any;
  categoryTitle: any;
  pageCount: any;

  constructor(private router: Router, private moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.moviesService.getMovies()
      .subscribe(
        (data: any) => {
          this.movies = data.results;
          this.categoryTitle = data.name;
          this.pageCount = Array(data.total_pages).fill(1).map((x, i) => i);
        }
      );
  }

  onPage(page: number) {
    this.moviesService.getMoviePage(page)
      .subscribe(
        (data: any) => {
          this.movies = data.results;
          this.categoryTitle = data.name;
          this.pageCount = Array(data.total_pages).fill(1).map((x, i) => i);
        }
      );
  }

  onViewDetail(movieId: number) {

    this.router.navigate(['/movies/' + movieId]);    
  }
}
