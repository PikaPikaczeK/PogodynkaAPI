const router = 8080;
const miasto = document.querySelector("#miasto");
const kod = document.querySelector("#kod_pocztowy");
const temp = document.querySelector("#temperatura");
const obraz = document.querySelector("#obraz");
const paragraf = document.querySelector("#dzien");
const zegar = document.querySelector("#zegar");

setInterval(() => {
  const date = new Date(); // Aktualizacja daty za każdym razem
  fetch(`http://localhost:${router}/sprawdz`)
    .then((response) => response.json())
    .then((dane) => {
      dane.forEach((element) => {
        const miasto_nazwa = element.location.name;
        const kod_pocztowy = element.location.zipcode;
        const temperatura =
          element.current.temperature + "°" + element.location.degreetype;
        miasto.textContent = miasto_nazwa;
        kod.textContent = kod_pocztowy;
        temp.textContent = temperatura;
        obraz.textContent = mapWeatherImages(element.current.skytext);
        paragraf.textContent = `${DostawZero(date.getDate())}-${DostawZero(
          date.getMonth()
        )}-${date.getFullYear()}, ${dzien(element.current.day)}`;
        zegar.textContent = `${DostawZero(date.getHours())}:${DostawZero(
          date.getMinutes()
        )}:${DostawZero(date.getSeconds())}`;
      });
    });
}, 500);

function DostawZero(element) {
  return element < 10 ? "0" + element : element;
}

function dzien(dzien) {
  switch (dzien) {
    case "Sunday":
      return "Niedziela";
    case "Monday":
      return "Poniedziałek";
    case "Tuesday":
      return "Wtorek";
    case "Wednesday":
      return "Środa";
    case "Thursday":
      return "Czwartek";
    case "Friday":
      return "Piątek";
    case "Saturday":
      return "Sobota";
  }
}

function mapWeatherImages(weatherText) {
  const mostlyCloudy = "Mostly Cloudy";
  const partlyCloudy = "Partly Cloudy";
  const sunny = "Sunny";
  const rain = "Rain";
  const thunderstorm = "Thunderstorm";
  const snow = "Snow";
  const fog = "Fog";
  const clear = "Clear";
  const mostlySunny = "Mostly Sunny";
  const mist = "Mist";
  const unknown = "Unknown";
  const cloudy = "Cloudy";

  const weatherEmojis = {
    [mostlyCloudy]: "☁️",
    [partlyCloudy]: "⛅",
    [sunny]: "☀️",
    [rain]: "🌧️",
    [thunderstorm]: "⛈️",
    [snow]: "❄️",
    [fog]: "🌫️",
    [clear]: "🌞",
    [mist]: "🌁",
    [cloudy]: "☁️",
    [mostlySunny]: "🌞",
    [unknown]: "❓",
  };

  return weatherEmojis[weatherText] || weatherEmojis[unknown];
}
