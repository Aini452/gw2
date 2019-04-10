import { WalletService } from '../services/wallet.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TokenComponent } from './token.component';
import { of } from 'rxjs';
import { Token } from '../model/token.model';


fdescribe('TokenComponent', () => {
  let component: TokenComponent;
  let fixture: ComponentFixture<TokenComponent>;
  const fakeWalletService = jasmine.createSpyObj('WalletService',
    {
      getToken: of({
        name: 'NameTest',
        description: 'DescriptionTest',
        icon: 'IconTest'
      })
    }
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TokenComponent],
      providers: [
        { provide: WalletService, useValue: fakeWalletService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenComponent);
    component = fixture.componentInstance;
    component.wallet = { id: 0, value: 10}as Token;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the right method', () => {
    expect(component.ws.getToken).toHaveBeenCalled();
  });

  it('should show the right poster', () => {
    const img = fixture.nativeElement.querySelector('img');
    expect(img.src).toContain('IconTest',
      'The icon test must show');
  });

});
