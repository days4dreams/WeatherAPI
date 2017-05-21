//Global Variables
var OPEN_WEATHER_MAP_API = "https://circuits-api.generalassemb.ly/8737fcf3-6a39-4548-a324-209d535e59fd?q=";
var resultElement = $("#result");

function callOpenWeatherMap(city) {

    if (city.length == 0) {
      $("#result").html("Please enter a city name into the search field");
    } else {

        $.get(OPEN_WEATHER_MAP_API + city, function(searchResult) {
          // convert Kelvin temperature to Celsius
          var celsiusTemp = toCelsius(searchResult.main.temp);

          // grab template HTML from DOM
          var source = $('.weather-result-template').html();

          // compile template
          var template = Handlebars.compile(source);

          // define weather data object that will be used in template
          var weatherTemplateData = {
          city: searchResult.name,
          temp: celsiusTemp
        };
      // inject weather data into template
      // and create template
      var weatherResultHTML = template(weatherTemplateData);

      resultElement.html(weatherResultHTML);

      });

    }

}

function toCelsius(kelvinTemp) {
  var temp = Math.round(kelvinTemp - 273.15);
  return temp;
}

$("#searchBtn").on('click', function (event){
    event.preventDefault(); 

    callOpenWeatherMap($("#searchField").val());
});
