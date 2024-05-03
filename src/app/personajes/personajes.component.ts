import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from '../services/personajes/personajes-api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-characters',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private characterSvc: CharactersApiService) { }
  allCharacters: Observable<any> | undefined;

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.characterSvc.getAllCharacters();
  }
}
