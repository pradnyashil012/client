
import './App.css';
import Carousel from './components/Carousel';
import {SliderData} from "./constants";

function App() {
  return (
    <Carousel slides={SliderData}/>
  );
}

export default App;
