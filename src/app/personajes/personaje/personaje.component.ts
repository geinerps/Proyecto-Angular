import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() character: any;
  constructor() { }

  ngOnInit() {
  }

}