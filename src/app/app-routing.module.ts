import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {path: '', component : HomeComponent, pathMatch: 'full'},
  {path: 'home', component : HomeComponent},
  {path: 'characters', component : CharactersComponent},
  {path: 'wallet', component : WalletComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
