import { WeatherDatas } from 'src/app/models/interfaces/weather.interface';
import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {

  // DADOS DA PREVISAO DO TEMPO RECEBIDOS PELO COMPONENTE PAI WEATHER HOME
  @Input() weatherDatasInput!: WeatherDatas;

  // ICONES DA PREVISAO DO TEMPO
  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;

  }
