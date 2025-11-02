import './App.css';
import BatteryLevel from './Components/BatteryLevel';
import Footer from './Components/Footer';
import PidmiCalculate from './Components/PidmiCalculate';

function App() {
  return (
    <div className="App">
      <BatteryLevel />
      <PidmiCalculate />
      <Footer />
    </div>
  );
}

export default App;
