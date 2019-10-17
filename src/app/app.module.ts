import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestAddComponent } from './request-add/request-add.component';
import { RequestGetComponent } from './request-get/request-get.component';
import { RequestEditComponent } from './request-edit/request-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RequestsService } from './requests.service';

@NgModule({
  declarations: [
    AppComponent,
    RequestAddComponent,
    RequestGetComponent,
    RequestEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ RequestsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
