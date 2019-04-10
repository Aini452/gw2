import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {

  charactersTab: Array<string>;
  @Output () nameEmitter: EventEmitter<string> = new EventEmitter<string> ();

  constructor(public ch: CharactersService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.ch.getCharacters().subscribe( res => {
      this.charactersTab = res;
      console.log(this.charactersTab);
    }, error => {
      console.log(error);
    });
  }

  sendName(name: string): void {
    this.nameEmitter.emit(name);
    console.log('envoyé');
  }
}
