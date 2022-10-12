import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { BlogCreateButtonComponent } from './blog-create-button/blog-create-button.component';
import { ProgrammingComponent } from './programming/programming.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { TimeagoModule } from 'ngx-timeago';
import { BlogDeleteButtonComponent } from './blog-delete-button/blog-delete-button.component';
import { BlogEditButtonComponent } from './blog-edit-button/blog-edit-button.component';
import { RegisterComponent } from './register/register.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { CryptoCurrenciesComponent } from './crypto-currencies/crypto-currencies.component';

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
    CryptoCurrenciesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TimeagoModule.forRoot(),
    CKEditorModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    NgxSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
