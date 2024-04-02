const form = document.getElementById("form");
const LatitudeInput = document.getElementById("latitude");
const LongitudeInput = document.getElementById("longitude");
const result = document.getElementById("result");
const aqiResult = document.getElementById("AQI");
const COResult = document.getElementById("CO");
const NO2Result = document.getElementById("NO2");
const O3Result = document.getElementById("O3");
const PM2Result = document.getElementById("PM2");
const PM10Result = document.getElementById("PM10");
const SO2Result = document.getElementById("SO2");

form.addEventListener("submit", (event) => {
  //to prevent default settings or actions
  event.preventDefault();

  //store values here using .vaule
  const latitude = LatitudeInput.value;
  const longitude = LongitudeInput.value;

  //api request and insert ${}
  const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`;

  //api key
  const options = {
    //get method
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c0113fc877msh6d26dc60fe7afa6p18dc03jsnf933b9f588c9",
      "X-RapidAPI-Host": "air-quality.p.rapidapi.com",
    },
  };

  //request, pass these
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});
