import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballRecordsService } from './services/football-records.service';
import { FootballRecordsComponent } from './components/football-records/football-records.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    FootballRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    BrowserAnimationsModule,
    FileUploadModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  providers: [FootballRecordsService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
