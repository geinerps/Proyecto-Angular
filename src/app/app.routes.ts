import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { RegisterComponent } from './register/register.component';
import { CharactersComponent } from './personajes/personajes.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'personajes', component: CharactersComponent },  
  { path: 'movies', component: MoviesComponent },  
  { path: 'movies/:id', component: MoviesDetailComponent },
  { path: 'tvshows', component: TvshowsComponent },  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];