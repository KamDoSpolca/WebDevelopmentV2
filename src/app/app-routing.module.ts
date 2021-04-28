import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { AttractionComponent } from './hiking/attraction/attraction.component';
import { HikingComponent } from './hiking/hiking.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'hiking', component: HikingComponent },
  { path: 'hiking/:id', component: AttractionComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
