import React, { Component } from "react";
import "./Weatherapi/css/WeatherCard.css";
import "./Weatherapi/css/weather-icons.min.css";
class Weathers extends Component {
  constructor(props) {
    super(props);
    this.callWeatherData();
    this.state = {
      weatherData: {
        aqi: 0,
        weather: "",
        id: "",
        main: "",
        city: "",
        country: "",
        temp: 0
      },
      searchDone: false,
      errorMessage: ""
    };
  }
  callWeatherData() {
    const url = `http://api.airvisual.com/v2/city?city=Phuket&state=Phuket&country=Thailand&key=77cab88b-0dde-4674-8818-537fd04a55df`;
    fetch(url)
      .then(handleErrors)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.data)
        const weatherObj = {
          aqi: data.data.current.pollution.aqius,
          city: data.data.city,
          country: data.data.country,
        };
        this.setState({
          weatherData: weatherObj,
          errorMessage: ""
        });
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
      });
    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  }
  render() {
    const { aqi, city, weather, id, main, country, temp } = this.state.weatherData;
    const celcius = Math.round(temp - 273.15);
    console.log(this.state)
    return (
      <div className="WeatherCard">
        <h1 className="WeatherCard-degrees">{aqi}</h1>
        <div className="WeatherCard-icon-container">
          <i className={`wi wi-owm-${id} WeatherCard-icon`} />
          <p>{main}</p>
        </div>
        <h3 className="WeatherCard-city">
          {city}, {country}
        </h3>
      </div>
    );
  }
}
export default Weathers;