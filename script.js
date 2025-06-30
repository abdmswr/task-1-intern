async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '09d1b60834a1984fd8176816875c2dcc'; // <-- use your own API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById('result').innerHTML = `
      <p>City: ${data.name}, ${data.sys.country}</p>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } else {
    document.getElementById('result').innerHTML = `<p>City not found 😢</p>`;
  }
}
