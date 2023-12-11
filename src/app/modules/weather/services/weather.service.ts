import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private apiKey = 'd6923e7a2a6f4109b7c3d3c1bbf86eab';

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string):Observable<any>{
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {}
      );
    }
  }
