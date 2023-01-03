import "./forecast.css";
export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="Days">
        <div class="d-flex flex-row justify-content-evenly">
          <div class="p-2">Monday</div>
          <div class="p-2">Tuesday</div>
          <div class="p-2">Wednesday </div>
          <div class="p-2">Friday</div>
          <div class="p-2">Saturday</div>
        </div>
      </div>
      <div className="WeeklyForecast">
        <div class="d-flex flex-row justify-content-evenly">
          <div class="p-2">12°</div>
          <div class="p-2">20°</div>
          <div class="p-2">15°</div>
          <div class="p-2">11°</div>
          <div class="p-2">9°</div>
        </div>
      </div>
    </div>
  );
}
