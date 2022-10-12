import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CryptoCurrenciesComponent } from './crypto-currencies/crypto-currencies.component';
import { HomeComponent } from './home/home.component';
import { ProgrammingComponent } from './programming/programming.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'isRight' } },
  {
    path: 'programming',
    component: ProgrammingComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'blockchain',
    component: BlockchainComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'blogs/:id',
    component: BlogDetailComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'crypto-currencies',
    component: CryptoCurrenciesComponent,
    data: { animation: 'isRight' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
