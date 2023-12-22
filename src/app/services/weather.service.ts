import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../interfaces/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  private apiKey = 'bd12cb882f8ecff8603aa88c0f6a33b0';
  getWeather(city: string): Observable<Weather> {
    return this.http.get<Weather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }
  getIcon(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }
}
