
const OPEN_WEATHER_API_KEY = "0232f67a3b225d201918856a42589835";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("getWeather");
  const input = document.getElementById("cityInput");
  const out = document.getElementById("weatherResult");

  if (!btn || !input || !out) return;

  const show = (html) => (out.innerHTML = html);

  btn.addEventListener("click", async () => {
    const city = (input.value || "").trim();
    if (!city) {
      show(`<p class="error">Please enter a city name.</p>`);
      return;
    }

    show(`<p>Loading...</p>`);

    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=0232f67a3b225d201918856a42589835&units=metric`
      );

      if (!resp.ok) {
        if (resp.status === 404) throw new Error("City not found");
        throw new Error("Unable to fetch weather");
      }

      const data = await resp.json();
      const icon = data.weather && data.weather[0] ? data.weather[0].icon : "01d";
      const desc = data.weather && data.weather[0] ? data.weather[0].description : "Weather";

      show(`
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
        <div>
          <h3>${data.name}</h3>
          <p><strong>${Math.round(data.main.temp)}°C</strong> — ${desc}</p>
          <p>Humidity: ${data.main.humidity}% · Wind: ${Math.round(data.wind.speed)} m/s</p>
        </div>
      `);
    } catch (err) {
      show(`<p class="error">Error: ${err.message}</p>`);
    }
  });
});
