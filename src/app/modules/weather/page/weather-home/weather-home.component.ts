import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { WeatherDatas } from 'src/app/models/interfaces/weather.interface';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'São Paulo'
  weatherDatas!:WeatherDatas;

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }


  getWeatherDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response)=> {
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas)
      },
      error:(error) => console.log(error),
    });
  }

  ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();

  }

}
