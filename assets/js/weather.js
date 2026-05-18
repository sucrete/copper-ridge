// Open-Meteo API — free, no key required
const LAT = 42.992;
const LON = -83.537;
const apiUrl =
  `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
  `&current=temperature_2m,windspeed_10m,weathercode` +
  `&daily=weathercode,temperature_2m_max,temperature_2m_min` +
  `&temperature_unit=fahrenheit&windspeed_unit=mph` +
  `&timezone=America%2FDetroit&forecast_days=7`;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var weatherData;

//~ Fetch Open-Meteo API
async function getWeather() {
  await fetch(apiUrl, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      weatherData = data;
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//~ Begin DOM manipulation - fired when fetch to API is finished
async function populateDOM() {
  await getWeather();

  // Rainbow "Open-Meteo" console signature
  const text = "Open-Meteo";
  const rainbow = [
    "#FF0000", "#FF5500", "#FF9900", "#CCCC00",
    "#00BB00", "#0099FF", "#0033FF", "#6600CC",
    "#9900CC", "#CC0066",
  ];
  const fmt = [...text].map((ch) => `%c${ch}`).join("");
  const styles = rainbow.map(
    (c) => `color:${c}; font-weight:bold; font-size:16px`
  );
  console.log(fmt, ...styles);

  //~ grab all DOM elements
  // today
  const weatherIcon = document.getElementsByClassName("icon-img")[0];
  const theTemp = document.getElementsByClassName("the-temp")[0];
  const weather = document.getElementsByClassName("what-weather")[0];
  const windSpeed = document.getElementsByClassName("wind")[0];

  // tomorrow
  const tomorrowDay = document.getElementsByClassName("tomorrow")[0];
  const tomorrowWeatherIcon =
    document.getElementsByClassName("tomorrow-icon")[0];
  const tomorrowHi = document
    .getElementsByClassName("future-row-1")[0]
    .getElementsByClassName("hi")[0];
  const tomorrowLo = document
    .getElementsByClassName("future-row-1")[0]
    .getElementsByClassName("lo")[0];

  // day after tomorrow
  const dayAfterTomorrowDay =
    document.getElementsByClassName("day-after-tomorrow")[0];
  const dayAfterTomorrowIcon = document.getElementsByClassName(
    "day-after-tomorrow-icon"
  )[0];
  const dayAfterTomorrowHi = document
    .getElementsByClassName("future-row-2")[0]
    .getElementsByClassName("hi")[0];
  const dayAfterTomorrowLo = document
    .getElementsByClassName("future-row-2")[0]
    .getElementsByClassName("lo")[0];

  // three days from today
  const threeDaysFromTodayDay = document.getElementsByClassName(
    "three-days-from-today"
  )[0];
  const threeDaysFromTodayIcon = document.getElementsByClassName(
    "three-days-from-today-icon"
  )[0];
  const threeDaysFromTodayHi = document
    .getElementsByClassName("future-row-3")[0]
    .getElementsByClassName("hi")[0];
  const threeDaysFromTodayLo = document
    .getElementsByClassName("future-row-3")[0]
    .getElementsByClassName("lo")[0];

  //~ Set Today's Weather
  const current = weatherData.current;
  weatherIcon.src = `./assets/images/icons/${wmoToIcon(current.weathercode)}.png`;
  theTemp.innerHTML = Math.ceil(current.temperature_2m);
  weather.innerHTML = wmoToSummary(current.weathercode);
  windSpeed.innerHTML = Math.ceil(current.windspeed_10m);

  //~ Set forecast days (daily[0] = today, [1] = tomorrow, etc.)
  const daily = weatherData.daily;

  const setForecastDay = (index, dayEl, iconEl, hiEl, loEl, ext) => {
    // Use noon local time to avoid midnight timezone edge cases
    dayEl.innerHTML = days[new Date(daily.time[index] + "T12:00:00").getDay()];
    iconEl.src = `./assets/images/icons/${wmoToIcon(daily.weathercode[index])}.${ext}`;
    hiEl.innerHTML = Math.ceil(daily.temperature_2m_max[index]);
    loEl.innerHTML = Math.ceil(daily.temperature_2m_min[index]);
  };

  setForecastDay(1, tomorrowDay, tomorrowWeatherIcon, tomorrowHi, tomorrowLo, "svg");
  setForecastDay(2, dayAfterTomorrowDay, dayAfterTomorrowIcon, dayAfterTomorrowHi, dayAfterTomorrowLo, "svg");
  setForecastDay(3, threeDaysFromTodayDay, threeDaysFromTodayIcon, threeDaysFromTodayHi, threeDaysFromTodayLo, "svg");
}

getWeather();
populateDOM();

//~ Map WMO weather codes to local icon filenames
const wmoToIcon = function (code) {
  if (code === 0) return "sun";
  if (code <= 2) return "part-cloud";
  if (code === 3) return "cloudy";
  if (code <= 48) return "foggy";
  if (code <= 67) return "rain";
  if (code <= 77) return "snow";
  if (code <= 82) return "rain";
  if (code <= 86) return "snow";
  return "rain"; // thunderstorms (95, 96, 99)
};

//~ Map WMO codes to human-readable summaries
const wmoToSummary = function (code) {
  if (code === 0) return "Clear";
  if (code === 1) return "Mainly Clear";
  if (code === 2) return "Partly Cloudy";
  if (code === 3) return "Overcast";
  if (code === 45 || code === 48) return "Foggy";
  if (code >= 51 && code <= 55) return "Drizzle";
  if (code >= 61 && code <= 65) return "Rain";
  if (code >= 71 && code <= 77) return "Snow";
  if (code >= 80 && code <= 82) return "Rain Showers";
  if (code >= 85 && code <= 86) return "Snow Showers";
  if (code >= 95) return "Thunderstorm";
  return "Cloudy";
};
