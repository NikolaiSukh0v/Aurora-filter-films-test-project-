import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-catalog',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-catalog.component.html',
})
export class MovieCatalogComponent {
  protected readonly movies: Movie[] = [
    {
      id: 1,
      title: 'Дюна: Часть вторая',
      year: '2024',
      genre: 'Фантастика',
      rating: '8.6',
    },
    {
      id: 2,
      title: 'Оппенгеймер',
      year: '2023',
      genre: 'Драма',
      rating: '8.3',
    },
    {
      id: 3,
      title: 'Интерстеллар',
      year: '2014',
      genre: 'Фантастика',
      rating: '8.7',
    },
    {
      id: 4,
      title: 'Бедные-несчастные',
      year: '2023',
      genre: 'Фэнтези',
      rating: '7.8',
    },
    {
      id: 5,
      title: 'Бегущий по лезвию 2049',
      year: '2017',
      genre: 'Фантастика',
      rating: '8.0',
    },
    {
      id: 6,
      title: 'Начало',
      year: '2010',
      genre: 'Триллер',
      rating: '8.4',
    },
    {
      id: 7,
      title: 'Ла-Ла Ленд',
      year: '2016',
      genre: 'Мюзикл',
      rating: '8.0',
    },
    {
      id: 8,
      title: 'Грань будущего',
      year: '2014',
      genre: 'Боевик',
      rating: '7.9',
    },
  ];
}
