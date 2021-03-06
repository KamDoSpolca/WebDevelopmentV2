import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HikingComponent } from './hiking/hiking.component';
import { AttractionComponent } from './hiking/attraction/attraction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HikingService } from './hiking/hiking.service';
import { LoginComponent } from './login/login.component';
import { HikingAddComponent } from './hiking/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    ContactsComponent,
    AttractionComponent,
    HikingComponent,
    NotFoundComponent,
    LoginComponent,
    HikingAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HikingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
