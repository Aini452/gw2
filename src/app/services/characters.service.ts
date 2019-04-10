import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../model/character.model';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
// https://wiki.guildwars2.com/wiki/API:2/characters
  constructor(public http: HttpClient) { }

  URL_API = 'https://api.guildwars2.com/v2/characters';
  URL_KEY = '95D96FCA-7E23-834E-A4D4-0E2CCF0603C5DE4D9A3B-2686-4DBF-B1FE-3BAE731EC048';

  getCharacters(): Observable<Array<string>> {
    return this.http.get<Array<string>>(this.URL_API +
      '?access_token=' + this.URL_KEY );
  }

  getOneCharacter(name: string): Observable<Character> {
    return this.http.get<Character>(this.URL_API +
      '/' + name +
      '?access_token=' + this.URL_KEY);
  }
}
