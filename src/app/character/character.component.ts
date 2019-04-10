import { Component, OnInit, Input } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input () character: Character;

  constructor() { }

  ngOnInit() {
  }

}
