import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
  }

  getTrendingMovies() {
this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
  console.log(movies);
  this.trendingMovies = movies;
  // console.log(movies);
  });

}
goToMovie(type: String, id: String) {
  this.router.navigate(['movie', type, id]);
}
}
