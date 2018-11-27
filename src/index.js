import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Posts from './components/posts';
import Profile from './components/profile';

import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
    render(){
        return(
            <div class="panel panel-primary">
                <div class="panel-heading">Panel with panel-primary class</div>
                <div class="panel-body">Hii, this is routing app</div>
            </div>
        )
    }
} 

ReactDOM.render(

<BrowserRouter>
<div>
    <header>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">WebSiteName</a>
        </div>
    <ul class="nav navbar-nav">
      <li>       
       <Link to="/">Home</Link>
      </li>
      <li>  
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
    <form class="navbar-form navbar-left" action="/action_page.php">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Search" name="search" />
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
</nav>
        
    </header>
    <Route exact path="/" component={App}></Route>
    <Route path="/posts" component={Posts}></Route>
    <Route path="/profile" component={Profile}></Route>
    </div>
</BrowserRouter>,

document.getElementById('root'));