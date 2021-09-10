import "./App.css";
import Header from "./Header/Header";
import LocationSelector from "./Content/LocationSelector";
import ForecastDisplay from "./Content/ForecastDisplay";

function App() {
  //make entire page grid
  return (
    <div>
      <Header />
      <LocationSelector />
      <ForecastDisplay />
    </div>
  );
}

export default App;
