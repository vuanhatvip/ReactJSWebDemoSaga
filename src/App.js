import React, { Component } from 'react';
//import './App.css';
import Navbar from './View/Header/index';
import Footer from './View/Footer/index';
import Home from './View/Pages/Home';
import ArticleDetail from './View/Pages/ArticleDetail/index';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from './View/Pages/Login/index';
import Setting from './View/Pages/Setting/index';
import CreateAndEditArticlePage from './View/Pages/Create-EditArticle';
import ProfilePage from './View/Pages/Profile/index';
import RegistrationPage from './View/Pages/Registration/index';
//import Article from './View/Article/index';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Footer/>
          <Switch>
            <Route exact path = '/' component={Home}/>
            <Route path='/ArticleDetail/:slug' component={ArticleDetail}/>
            <Route path= '/Login' component={LoginPage}/>
            <Route path= '/Setting' component={Setting}/>
            <Route path= '/CreateArticle' component={CreateAndEditArticlePage}/>
            <Route path= '/Profile/:username' component={ProfilePage}/>
            <Route path= '/EditArticle/:slug' component={CreateAndEditArticlePage}/>
            <Route path= '/Registration' component={RegistrationPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
