import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Character } from '../model/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  nameCharacter: string;
  character: Character;

  constructor(public ch: CharactersService) { }

  ngOnInit() {
  }

  getNameCharacter(name: string): void {
    console.log('reçu !' + name);
    this.nameCharacter = name;
    this.getCharacter();
  }

  getCharacter(): void {
    this.ch.getOneCharacter(this.nameCharacter).subscribe( res => {
      this.character = res;
      console.log( 'charac : ' + this.character);
    });
  }
}
