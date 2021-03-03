import react from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AdminLoginScreen from './screens/AdminLoginScreen/AdminLoginScreen';
import ProjectScreen from './screens/ProjectScreen/ProjectScreen';
import AdminScreen from './screens/AdminScreen/AdminScreen';
import ProjectListScreen from './screens/ProjectListScreen/ProjectListScreen';
import ProjectEditScreen from './screens/ProjectEditScreen/ProjectEditScreen';
import MessageListScreen from './screens/MessageListScreen/MessageListScreen';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Route path="/" component={HomeScreen} exact/>
          <Route path="/admin/login" component={AdminLoginScreen} exact/>
          <Route path="/projects/:id" component={ProjectScreen}/>
          <Route path="/admin" component={AdminScreen} exact/>
          <Route path="/admin/projects" component={ProjectListScreen} exact/>
          <Route path="/admin/messages" component={MessageListScreen} exact/>
          <Route path="/admin/projects/:id/edit" component={ProjectEditScreen}/>
          
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
