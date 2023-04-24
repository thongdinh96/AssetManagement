import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { BlogCreateButtonComponent } from './blog-create-button/blog-create-button.component';
import { ProgrammingComponent } from './programming/programming.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogDeleteButtonComponent } from './blog-delete-button/blog-delete-button.component';
import { BlogEditButtonComponent } from './blog-edit-button/blog-edit-button.component';
import { RegisterComponent } from './register/register.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { DateInputComponent } from './_forms/date-input/date-input.component';
import { SharedModule } from './_modules/shared.module';
import { CryptoOrderComponent } from './crypto-order/crypto-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListsComponent,
    HomeComponent,
    BlogCreateButtonComponent,
    ProgrammingComponent,
    BlockchainComponent,
    BlogDetailComponent,
    BlogDeleteButtonComponent,
    BlogEditButtonComponent,
    RegisterComponent,
    TextInputComponent,
    DateInputComponent,
    CryptoOrderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
