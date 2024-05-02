import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../services/tvshows/tvshows.service';

@Component({
  selector: 'app-tvshows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tvshows.component.html',
  styleUrl: './tvshows.component.css'
})
export class TvshowsComponent  implements OnInit {
  tvshows: any;  

  constructor(private tvshowsService: TvshowsService) {

  }

  ngOnInit(): void {
    this.tvshowsService.getTvShows()
      .subscribe(
        (data: any) => {
          this.tvshows = data.results;          
        }
      );
  }
}