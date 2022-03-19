import './App.css';
import './Grid.css'
import './responsive.css'
import Header from './Components/Header';
import Intro from './Components/Intro/Intro';
import Content from './Components/Content/Content';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Content/>
    </div>
  );
}

export default App;
