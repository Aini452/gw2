import {CharactersService} from '../services/characters.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CharacterComponent } from './character.component';
import { of } from 'rxjs';
import { Character } from '../model/character.model';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  // const fakeCharacterService = jasmine.createSpyObj('CharactersService' , {getOneCharacter: of() });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a character', () => {
    component.character = {
      name: 'Name',
      race: 'Race'
    }as Character;
    fixture.detectChanges();

    const name = fixture.nativeElement.querySelector('h4');
    expect(name.textContent).toEqual('Name');

    const race = fixture.nativeElement.querySelector('p');
    expect(race.textContent).toEqual('Race');
  });
});
