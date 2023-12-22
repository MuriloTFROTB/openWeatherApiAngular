import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../interfaces/weather';
@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrl: './card-weather.component.css',
})
export class CardWeatherComponent {
  constructor(private weatherService: WeatherService) {
    
    this.getIcon()
  }
  city = '';
  weatherData?:Weather;
  iconUrl?:string;
  getWeather() {
    this.weatherService.getWeather(this.city).subscribe((data) => {
      this.weatherData = data;
      console.log(data);
      if (this.weatherData) {
        this.getIcon();
      }
    });
  }
  getIcon(){
    if(this.weatherData && this.weatherData.weather && this.weatherData.weather.length >0){
      const iconCode=this.weatherData.weather[0].icon;
      this.iconUrl=this.weatherService.getIcon(iconCode)
    }
  }
}
