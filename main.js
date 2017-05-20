//OpenWeatherMap API 
var OPEN_WEATHER_MAP_API = "https://circuits-api.generalassemb.ly/8737fcf3-6a39-4548-a324-209d535e59fd?q=";
//global variable to store base of API URI

var resultElement = $('#result');
// assign result element to variable

$('#searchBtn').on('click', function(e){
  e.preventDefault();
  var city = $('#searchField').val();
  //get user input and assign it to var of city, which we then pass into the function callOpenWeatherMap
  callOpenWeatherMap(city);
});
//search DOM for search button, add click event listener


function toCelsius(kelvinTemp) {
  var temp = Math.round(kelvinTemp - 273.15);
  return temp;
}
//function to convert Kelvin temperature to Celsius

 function callOpenWeatherMap(city) {
    if (city.length == 0) {
      $("#result").html("Please enter a city name into the search field");
    } 
   //check to see that user has input a city name, if city name blank, present message back to result field to prompt entry
   else {
	  $.get( OPEN_WEATHER_MAP_API + city, function(searchResult){
      console.log(searchResult.main.temp);
      
      var celsiusTemp = toCelsius(searchResult.main.temp);
      //create var celsiusTemp, then pass the temperature result data into via function above, to celsius, converting kelvin temp to celsius value. celsiusTemp var holds converted output
        
      var stringOutput =  stringOutput = "<p>"+ searchResult.name + "<br>"; //adding result city name
            stringOutput += "<p>"+ celsiusTemp + " C" + "<br>"; //adding result temperature
            stringOutput +="</p>";
      //variable to contain what we push to screen
      
      resultElement.html(stringOutput);
      // use string searchResult to fill markup with ID resultElement on screen  
      });
    }
//make a GET request to the API for the city given by user.
//create anonymous success handler function which checks the reply by logging temp
}
//create funtction to call the API, passing city as arguement

