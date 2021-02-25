import react from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Route path="/" component={HomeScreen}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
