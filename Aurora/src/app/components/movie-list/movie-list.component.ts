import { Component } from '@angular/core';
import { MovieCatalogComponent } from '../movie-catalog/movie-catalog.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCatalogComponent],
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {}
